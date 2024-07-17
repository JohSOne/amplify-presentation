import {Home, POICard} from "../ui-components/index.js";
import React, {useEffect, useState} from "react";
import {Button, Card, Flex, Heading, useBreakpointValue} from "@aws-amplify/ui-react";
import {iPoiCard} from "../assets/mock-data.ts";
import {Schema} from "../../amplify/data/resource.ts";
import {generateClient} from "aws-amplify/api";
import {MapView} from "@aws-amplify/ui-react-geo";
import {Marker} from "react-map-gl";
import {PoiCreateForm, PoiUpdateForm} from "../forms";

const client = generateClient<Schema>({
    authMode: "userPool"
}) // use this Data client for CRUDL requests
type Poi = Schema['Poi']['type'];

// eslint-disable-next-line no-unused-vars
enum Dialog {
    // eslint-disable-next-line no-unused-vars
    Add,
    // eslint-disable-next-line no-unused-vars
    Edit
}

export default function HomePage(props: {signOut:any}) {
    const [pois, setPois] = useState<Poi[]>([]);
    console.log(pois)
    useEffect(() => {
        const sub = client.models["Poi"].observeQuery().subscribe({
            next: ({items}) => {
                setPois([...items]);
            },
        });
        return () => sub.unsubscribe();
    }, []);

    const [{latitude, longitude, zoom}, setMarkerLocation] = useState<{
        latitude: number,
        longitude: number,
        zoom: number
    }>({
        latitude: 0,
        longitude: 0,
        zoom: 1
    });

    const [showDialog, setShowDialog] = useState<{ id?: string, type: Dialog, show: boolean }>({
        type: Dialog.Add,
        show: false
    })


    const variation = useBreakpointValue({
        small: 'mobile',
        medium: 'default'
    })

    function handleMarkOnMap(coordinates: (string| undefined|null)) {
        if (coordinates != null) {
            setMarkerLocation({
                latitude: Number(coordinates.split(",")[0]),
                longitude: Number(coordinates.split(",")[1]),
                zoom: 11
            })
        }
    }

    function handleDelte(id: string) {
        const result = confirm("Do you want to delete the POI?")
        if (result) {
            const del = client.models["Poi"].delete({id})
            console.log(del)
        }
    }

    function handleEdit(id: string) {
        setShowDialog({id: id, type: Dialog.Edit, show: true})
    }

    function handleNew() {
        setShowDialog({type: Dialog.Add, show: true})
    }

    function handleLogout() {
        props.signOut()
    }

    const cardOverrides = (props: Poi) => {
        return {
            className: "poiCard",
            overrides: {
                image: {
                    src: props.image,
                    onClick: () => handleMarkOnMap(props.coordinates),
                    style: {cursor: "pointer"}
                },
                title: {
                    children: props.title
                },
                aboveTitle: {
                    children: props.aboveTitle,
                },
                contentText: {
                    children: props.contentText,
                    overflow: "hidden"
                },
                editButton: {
                    onClick: () => handleEdit(props.id)
                },
                deleteButton: {
                    colorTheme: "error",
                    onClick: () => handleDelte(props.id)
                }
            }
        }
    }

    const cardCollection = pois.map((item: Poi, index) =>
        <POICard key={index}
                 {...cardOverrides(item)}
        ></POICard>
    )

    const rightContainerOverrides = {
        height: "100%",
        position: "absolute",
        right: 1,
        overflow: undefined,
        children: cardCollection
    }

    const mapElement = latitude ?
        <MapView latitude={latitude} longitude={longitude} zoom={zoom} style={{height: "100%"}}>
            <Marker longitude={longitude} latitude={latitude}/>
        </MapView> : <MapView/>

    const leftContainerOverrides = {
        children: mapElement
    }

    const mainContainerOverrides = {
            height: "100%"
    }

    const navigationOverrides = {
        variation: variation,
        width: "100%",
        overrides: {
            newButton: {
                onClick: handleNew
            },
            logOutButton: {
                onClick: handleLogout
            }
        }
    }

    let dialogSet;

    switch (showDialog.type) {
        case Dialog.Add:
            dialogSet = {title: "Add New POI", component: <PoiCreateForm/>};
            break;
        case Dialog.Edit:
            dialogSet = {title: "Edit POI", component: <PoiUpdateForm id={showDialog.id}/>}
            break;
    }
    return <>
        {showDialog.show &&
            <Card variation={"elevated"}
                  width={500}
                  position={"fixed"}
                  style={{zIndex: "1", transform: "translate(-50%, -50%)"}}
                  top={"50%"}
                  left={"50%"}>
                <Flex padding={"0 20px"}
                      alignItems={"center"}>
                    <Heading level={4}
                             width={"100%"}>
                        {dialogSet.title}
                    </Heading>
                    <Button variation={"warning"}
                            onClick={() => setShowDialog({...showDialog, show: false})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-x-square-fill" viewBox="0 0 16 16">
                            <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                        </svg>
                    </Button>
                </Flex>
                {dialogSet.component}
            </Card>
        }
        <Home width={"100%"} height={"100vh"} overrides={{
            MainContainer: mainContainerOverrides,
            Navigation: navigationOverrides,
            LeftContainer: leftContainerOverrides,
            RightContainer: rightContainerOverrides,
        }}/>
    </>
}
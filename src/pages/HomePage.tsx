import {Home, POICard} from "../ui-components/index.js";
import React, {useEffect, useState} from "react";
import {Button, Card, Flex, Heading, useBreakpointValue} from "@aws-amplify/ui-react";
import {iPoiCard} from "../assets/mock-data.ts";
import {Schema} from "../../amplify/data/resource.ts";
import {generateClient} from "aws-amplify/api";
import {MapView} from "@aws-amplify/ui-react-geo";
import {Marker} from "react-map-gl";
import {PoiCreateForm, PoiUpdateForm} from "../forms";
import {IconClose} from "@aws-amplify/ui-react/internal";
import {SignOut} from "@aws-amplify/ui-react/dist/types/components/Authenticator/Authenticator";

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

export default function HomePage(props:{signOut:SignOut}) {
    const [pois, setPois] = useState<Poi[]>([]);

    useEffect(() => {
        console.log(client.models)
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

    function handleMarkOnMap(coordinates: string) {
        setMarkerLocation({
            latitude: Number(coordinates.split(",")[0]),
            longitude: Number(coordinates.split(",")[1]),
            zoom: 11
        })
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

    const cardOverrides = (props: iPoiCard & { id: string }) => {
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

    const cardCollection = pois.map((item: iPoiCard & { id: string }, index) =>
        <POICard key={index}
                 {...cardOverrides({
                     coordinates: item.coordinates,
                     image: item.image,
                     title: item.title,
                     aboveTitle: item.aboveTitle,
                     contentText: item.contentText,
                     id: item.id
                 })}
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
                  direction={"column"}
                  width={500}
                  gap={"unset"}
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
                        <IconClose/>
                    </Button>
                </Flex>
                {dialogSet.component}
            </Card>
        }
        <Home width={"100%"} height={"100vh"} overrides={{
            MainContainer:mainContainerOverrides,
            Navigation: navigationOverrides,
            LeftContainer: leftContainerOverrides,
            RightContainer: rightContainerOverrides,
        }}/>
    </>
}
import React, {useEffect, useState} from "react";
import {Home, MyIcon, POICard} from "../../ui-components";
import {items} from "../../assets/mock-data.ts";
import {Button, Card, Collection, Flex, Heading, useBreakpointValue} from "@aws-amplify/ui-react";
import {MapView} from "@aws-amplify/ui-react-geo";
import {Marker} from "react-map-gl";
import {PoiCreateForm, PoiUpdateForm} from "../../forms";
import type {Schema} from "../../../amplify/data/resource.ts";
import {generateClient} from "aws-amplify/api";
import {IconClose} from "@aws-amplify/ui-react/internal";

const client = generateClient<Schema>({
    authMode: "userPool"
}) // use this Data client for CRUDL requests
type Poi = Schema['Poi']['type'];

enum Dialog {
    Add,
    Edit
}

function deletePoi(id: string) {
    const result = confirm("Do you want to delete the POI?")
    if (result) {
        let del = client.models.Poi.delete({id})
        console.log(del)
    }
}

export default function HomePage(props) {
    const [pois, setPois] = useState<Poi[]>([]);
    const [{latitude, longitude, zoom}, setMarkerLocation] = useState({
        latitude: undefined,
        longitude: undefined,
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
    const poisElement = <Collection items={pois}>
        {(item, index) =>
            <POICard key={index}
                     className={"poiCard"}
                     overrides={{
                         image: {
                             src: item.image,
                             onClick: () => setMarkerLocation({
                                 latitude: item.coordinates.split(",")[0],
                                 longitude: item.coordinates.split(",")[1],
                                 zoom: 11
                             }),
                             style: {
                                 cursor: "pointer",
                             }
                         },
                         title: {
                             children: item.title
                         },
                         aboveTitle: {
                             children: item.aboveTitle,
                         },
                         contentText: {
                             children: item.contentText,
                             overflow: "hidden"
                         },
                         editButton: {
                             children: <MyIcon type={"edit"}/>,
                             onClick: () => setShowDialog({id: item.id, type: Dialog.Edit, show: true})
                         },
                         deleteButton: {
                             children: <MyIcon type={"delete"}/>,
                             onClick: () => deletePoi(item.id)
                         }
                     }}></POICard>}
    </Collection>
    const mapElement = latitude ?
        <MapView latitude={latitude} longitude={longitude} zoom={zoom} style={{height: "100%"}}>
            <Marker longitude={longitude} latitude={latitude}/>
        </MapView> : <MapView/>

    let dialogSet;

    switch (showDialog.type) {
        case Dialog.Add:
            dialogSet = {title: "Add New POI", component: <PoiCreateForm/>};
            break;
        case Dialog.Edit:
            dialogSet = {title: "Edit POI", component: <PoiUpdateForm id={showDialog.id}/>}
            break;
    }

    const homePageOverrides = {
        Navigation: {
            variation:variation,
            overrides: {
                newButton: {
                    onClick: () => setShowDialog({type: Dialog.Add, show: true})
                },
                logOutButton: {
                    onClick: props.signOut
                }
            }
        },
        MainContainer: {
            height: "100%",
        },
        LeftContainer: {
            width: "100%",
            children: mapElement
        },
        RightContainer: {
            className: "rightContainer",
            position: "absolute",
            height: "100%",
            overflow: undefined,
            children: poisElement
        }
    }

    useEffect(() => {
        const sub = client.models.Poi.observeQuery().subscribe({
            next: ({items}) => {
                setPois([...items]);
            },
        });
        return () => sub.unsubscribe();
    }, []);


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
        <Home overrides={homePageOverrides} width={"100%"} height={"100vh"}/>
    </>
}
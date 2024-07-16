import React, {useState} from "react";
import {Home, POICard} from "../../ui-components";
import {items} from "../../assets/mock-data.ts";
import {Collection, useBreakpointValue} from "@aws-amplify/ui-react";
import {MapView} from "@aws-amplify/ui-react-geo";
import {Marker} from "react-map-gl";
import {PoiCreateForm, PoiUpdateForm} from "../../../ui-components";
import type {Schema} from "../../../amplify/data/resource.ts";
import {generateClient} from "aws-amplify/api";

const client = generateClient<Schema>({
    authMode: "userPool"
}) // use this Data client for CRUDL requests
type Poi = Schema['Poi']['type'];

enum Dialog {
    Add,
    Edit
}
export default function HomePage() {
    const [pois, setPois] = useState<Array<Poi[]>([]);
    const [{latitude, longitude, zoom}, setMarkerLocation] = useState({
        latitude: undefined,
        longitude: undefined,
        zoom: 1
    });
    const [showDialog, setShowDialog] = useState<{ id?: string, type: Dialog, show: boolean }>({
        type: Dialog.Add,
        show: false
    })
    const showTools = !!(latitude != undefined & longitude != undefined)
    const variation = useBreakpointValue({
        small: 'mobile',
        medium: 'default'
    })

    const poisElement = <Collection items={items}>
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
                             style: {
                                 cursor: "pointer"
                             },
                             onClick: () => alert("edit Button")
                         },
                         deleteButton: {
                             style: {
                                 cursor: "pointer"
                             },
                             onClick: () => alert("delete Button")
                         }
                     }}></POICard>}
    </Collection>
    const mapElement = latitude ? <MapView latitude={latitude} longitude={longitude} zoom={zoom} style={{height: "100%"}}>
        <Marker longitude={longitude} latitude={latitude}/>
    </MapView> : <MapView />

    function deletePoi(id: string) {
        const result = confirm("Do you want to delete the POI?")
        console.log(result)
        if (result) {
            let del = client.models.Poi.delete({id})
            console.log(del)
        }
    }

    let dialogSet;

    switch (showDialog.type) {
        case Dialog.Add:
            dialogSet = {title:"Add New POI", component: <PoiCreateForm />};
            break;
        case Dialog.Edit:
            dialogSet = {title:"Edit POI", component: <PoiUpdateForm id={showDialog.id}/>}
            break;
    }

    const homePageOverrides = {
        MainContainer: {
            height: "100%",
        },
        LeftContainer:{
            width:"100%",
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
    return (
        <Home overrides={homePageOverrides} width={"100%"} height={"100vh"}/>
    );
}
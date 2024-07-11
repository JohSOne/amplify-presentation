import {Button, Card, Collection, Flex} from '@aws-amplify/ui-react';
import {POICard} from '../ui-components';
import {MapView} from "@aws-amplify/ui-react-geo";
import {Marker} from 'react-map-gl'
import {useState} from "react";
import '@aws-amplify/ui-react-geo/styles.css';

const items = [
    {
        title: "Pico de las Nieves",
        aboveTitle: "Mountains",
        contentText: "This is the top of the mountain in the middle of the Gran Canaria island. It has 1956 m" +
            " and offers the best view of the island. 🔭",
        image: "src/assets/mountain.png",
        coordinates: "27.962220, -15.571574"
    },
    {
        title: "Dunas de Maspalomas",
        aboveTitle: "Desert",
        contentText: "The short Sahara. 11 km of sand dunes to walk and astonish 🏜️",
        image: "src/assets/dunas.png",
        coordinates: "27.740441, -15.581789"
    },

]
export default function HomePage() {
    const [{ latitude, longitude , zoom}, setMarkerLocation] = useState<{latitude:number, longitude:number, zoom:number}>({
        latitude: 27.962220,
        longitude: -15.571574,
        zoom:5
    });
    const updateMarker = ({lat, long}) =>
        setMarkerLocation({ latitude: lat, longitude: long, zoom:zoom });

    const updateZoom = ({zm}) =>
        setMarkerLocation({latitude:latitude, longitude: longitude, zoom:zm})

    return (
        <>
        <Flex

            width="100vw"
            height="100vh"
            gap="10px"
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(255,255,255,1)"
        >
            <Flex
                gap="10px"
                direction="column"
                width="30%"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="7px 9px 7px 9px"
                backgroundColor="rgba(195,181,181,1)"
            >
                <Collection items={items}>
                    {(item, index) => (
                        <Card variation={"elevated"} padding={7} key={index}>
                            <POICard overrides={{
                                image: {
                                    src: item.image,
                                    width: "30%"
                                },
                                "Card Area": {
                                    width: "70%"
                                },
                                POICard: {
                                    onClick: () => updateMarker({lat: item.coordinates.split(",")[0], long:item.coordinates.split(",")[1]}),
                                    style: {
                                        cursor: "pointer"
                                    },
                                    width: "100%"
                                },
                                title: {
                                    children: item.title
                                },
                                aboveTitle: {
                                    children: item.aboveTitle,
                                },
                                contentText: {
                                    children: item.contentText
                                }
                            }}/>
                        </Card>
                    )}
                </Collection>

            </Flex>
            <Flex
                backgroundColor="rgba(103,88,88,1)"
            />
            <Button onClick={()=>updateZoom({zm:zoom+1})}>Zoom + </Button>
            <Button onClick={()=>updateZoom({zm:zoom-1})}>Zoom -</Button>
            <MapView viewState={{latitude:latitude, longitude:longitude, zoom:zoom}} >
                <Marker longitude={longitude} latitude={latitude}/>
            </MapView>
        </Flex>#

    </>
    )
}
import {Button, Card, Collection, Flex} from '@aws-amplify/ui-react';
import {POICard} from '../ui-components/index.js';
import {MapView} from "@aws-amplify/ui-react-geo";
import {Marker} from 'react-map-gl'
import {useCallback, useState} from "react";
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
    const [{latitude, longitude, zoom}, setMarkerLocation] = useState({
        latitude: undefined,
        longitude: undefined,
        zoom: 1
    });
    const pointerZoom = 11
    const showTools = !!(latitude != undefined & longitude != undefined)

    return (
        <>
            <Flex
                width="100%"
                height={"99vh"}
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
                                        onClick: () => setMarkerLocation({
                                            latitude: item.coordinates.split(",")[0],
                                            longitude: item.coordinates.split(",")[1],
                                            zoom: pointerZoom
                                        }),
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
                {showTools && <>
                    <Flex direction={"column"} position={"relative"}>
                        <Button
                            onClick={() => setMarkerLocation({latitude: undefined, longitude: undefined, zoom: 1})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-globe-europe-africa" viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501"/>
                            </svg>
                        </Button>
                        <Button onClick={() => setMarkerLocation({
                            latitude: latitude,
                            longitude: longitude,
                            zoom: zoom + 1
                        })}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-zoom-in" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                <path
                                    d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                <path fillRule="evenodd"
                                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </Button>
                        <Button onClick={() => setMarkerLocation({
                            latitude: latitude,
                            longitude: longitude,
                            zoom: zoom - 1
                        })}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-zoom-out" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                <path
                                    d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                <path fillRule="evenodd"
                                      d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </Button>
                    </Flex>
                    <MapView latitude={latitude} longitude={longitude} zoom={zoom} style={{height: "100%"}}>
                        showTools & <Marker longitude={longitude} latitude={latitude}/>
                    </MapView>
                </>}
                {!showTools && <MapView style={{height: "100%"}}/>}
            </Flex>
        </>
    )
}
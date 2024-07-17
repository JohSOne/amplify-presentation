import {Home, POICard} from "../figma-components/index.js";
import React from "react";
import {Image} from "@aws-amplify/ui-react";
import {iPoiCard, items} from "../assets/mock-data.ts";

export default function HomePage() {
    function handleDelte() {
        alert("delete me")
    }

    function handleEdit() {
        alert("edit me")
    }

    function handleNew() {
        alert("add new")
    }

    function handleLogout() {
        alert("log out")
    }


    const cardOverrides = (props:  iPoiCard) => {
        return {
            className: "poiCard",
            overrides: {
                image: {
                    src: props.image,
                    onClick:()=> alert("Coordinates: " + props.coordinates),
                    style: {cursor:"pointer"}
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
                    onClick: handleEdit
                },
                deleteButton: {
                    colorTheme: "error",
                    onClick: handleDelte
                }
            }
        }
    }
    const cardCollection = items.map((item, index) =>
        <POICard key={index}
                 {...cardOverrides({
                     coordinates: item.coordinates,
                     image: item.image,
                     title: item.title,
                     aboveTitle: item.aboveTitle,
                     contentText: item.contentText
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
    const leftContainerOverrides = {
        children: <Image src={"src/assets/img.png"} width={"100%"} height={"100%"} alt={"maps-image"}/>
    }
    const navigationOverrides = {
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

    /*    // For showcase
        const mapsImageOverrides = {
            src: "src/assets/img.png"
        }*/
    return <Home width={"100%"} overrides={{
        Navigation: navigationOverrides,
        LeftContainer: leftContainerOverrides,
        RightContainer: rightContainerOverrides,
        /*        // For showcase
                MapsImage: mapsImageOverrides,
                card48461353: cardOverrides({image:"src/assets/img.png"}),
                card48461368: cardOverrides({image:"src/assets/img.png"}),*/
    }}/>
}
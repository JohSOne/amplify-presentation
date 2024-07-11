import {Card, Collection, Flex} from '@aws-amplify/ui-react';
import {POICard} from '../ui-components';

const items = [
    {
        title: "Pico de las Nieves",
        aboveTitle: "Mountains",
        contentText: "This is the top of the mountain in the middle of the Gran Canaria island. It has 1956 m" +
            " and offers the best view of the island. 🔭",
        image: "src/assets/mountain.png",
        coordinates: "28,01942° N, 15,64631° V"
    },
    {
        title: "Dunas de Maspalomas",
        aboveTitle: "Desert",
        contentText: "The short Sahara. 11 km of sand dunes to walk and astonish 🏜️",
        image: "src/assets/dunas.png",
        coordinates: "27,74447° N, 15,57506° V"
    },

]
export default function HomePage() {
    return (
        <Flex
            gap="10px"
            direction="row"
            width="1700px"
            height="1000px"
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
                width="500px"
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
                                    onClick: () => alert(`access ${item.coordinates}`),
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
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                backgroundColor="rgba(103,88,88,1)"
            />
        </Flex>
    )
}
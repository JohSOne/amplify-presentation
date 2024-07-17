export const items:iPoiCard[] = [
    {
        title: "Pico de las Nieves",
        aboveTitle: "Mountains",
        contentText: "This is the top of the mountain in the middle of the Gran Canaria island. It has 1956 m and" +
            " offers the best view of the island. 🔭",
        image: "assets/mountain.png",
        coordinates: "27.962220, -15.571574"
    },
    {
        title: "Dunas de Maspalomas",
        aboveTitle: "Desert",
        contentText: "The short Sahara. 11 km of sand dunes to walk and astonish 🏜️",
        image: "assets/dunas.png",
        coordinates: "27.740441, -15.581789"
    },
    {
        title: "Anfi del Mar",
        aboveTitle: "Beach",
        contentText: "An Amazing Beach with special Park/Terrace for weddings 🏖️💍",
        image: "assets/anfi.png",
        coordinates: "27.77301, -15.69730"
    }
]

export interface iPoiCard {
    title: string,
    aboveTitle: string
    contentText: string,
    image: string,
    coordinates: string
}
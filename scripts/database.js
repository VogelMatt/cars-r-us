const database = {
    paintColors: [
        { id: 1, name: "Silver Foxbody Mustang", price: 500.98 },
        { id: 2, name: "Midnight Blue Grand Torino", price: 710.00 },
        { id: 3, name: "Firebrick Red Berlinetta ", price: 965.13 },
        { id: 4, name: "Spring Green Bel Air", price: 2500.56 }
    ],
    interiors: [
        { id: 1, name: "Classic", price: 1500.55 },
        { id: 2, name: "Modern", price: 3710.99 },
        { id: 3, name: "Vintage", price: 3965.81 },
        { id: 4, name: "Black Leather", price: 7896.35 }
    ],
    technologies: [
        { id: 1, name: "Basic Package", price: 268.25 },
        { id: 2, name: "Navigation Package", price: 580.24 },
        { id: 3, name: "Visibility Package", price: 1085.36 },
        { id: 4, name: "Ultra Package", price: 3446.87 }
    ],
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 577.36 },
        { id: 2, name: "17-inch Pair Radial Black", price: 782.58 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 2335.44 },
        { id: 4, name: "18-inch Pair Spoke Black", price: 8896.56 }
    ],
    customOrders: [
        {
            id: 1,
            paintColorsId: 3,
            interiorsId: 2,
            technologiesId: 4,
            wheelsId: 1
        }
    ],
    orderBuilder: {}
}

//-------------------------------------------------------------------------
export const getColors = () => {
    return database.paintColors.map(color => ({...color}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}
//------------------------------------------------------------------------
export const setColor = (id) => {
    database.orderBuilder.paintColorsId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}
export const setTech = (id) => {
    database.orderBuilder.technologiesId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorsId = id
}
//--------------------------------------------------------------------------------
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
//--------------------------------------------------------------------------------
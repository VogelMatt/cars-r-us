import { getColors, getInteriors, getTechnologies, getWheels, getCustomOrders } from "./database.js"

const buildOrderListItem = (order) => {
    const wheelies = getWheels();
    const techies = getTechnologies();
    const interies = getInteriors();
    const colies = getColors();


const foundWheels = wheelies.find(
    (wheel) => {
        return wheel.id === order.wheelsId
    }
)
const foundTech = techies.find(
    (technology) => {
        return technology.id === order.technologiesId
    }
)
const foundInteriors = interies.find(
    (interior) => {
        return interior.id === order.interiorsId
    }
)
const foundColor = colies.find(
    (color) => {
        return color.id === order.paintColorsId
    }
)
console.log(foundTech,foundColor,foundInteriors,foundWheels)

const totalPackage = foundColor.price + foundInteriors.price + foundTech.price + foundWheels.price

const costString = totalPackage.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li>
    ${foundColor.name} car with a ${foundWheels.name} wheels, and ${foundInteriors.name} interior, and the ${foundTech.name}, for a total cost of ${costString}
</li>`

}

export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
   
   let html = "<ul>"
   const orders = getCustomOrders()

    const listItems = orders.map(buildOrderListItem)
    

    html += listItems.join("")
    html += "</ul>"

    return html
}
import { getWheels, setWheels } from "./database.js";

const wheels = getWheels();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = `<select name="wheels">
    <option value="0">Select Wheel</option>`

    const listItemsArray = wheels.map(
        (wheel) => {
            return `
             <option value="${wheel.id}">${wheel.name} 
             </option>`
        }
    )
    html += listItemsArray.join("")

    html += "</select>"
    return html

}
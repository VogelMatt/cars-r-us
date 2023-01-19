import { getColors, setColor } from "./database.js";

const paint = getColors();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = `<select name="paint">
    <option value="0">Select Paint</option>`

    const listItemsArray = paint.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.name} </option>`
        }
    )
    html += listItemsArray.join("")

    html += "</select>"
    return html
}
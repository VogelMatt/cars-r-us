import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = `<select name="interior">
    <option value="0">Select Interior</option>`

    const listItemsArray = interiors.map(
        (interior) => {
            return `
            <option value="${interior.id}">${interior.name}
            </options>`
        }
    )
     html += listItemsArray.join("")

    html += "</select>"
    return html
}
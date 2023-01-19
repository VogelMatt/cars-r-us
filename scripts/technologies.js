import { getTechnologies, setTech } from "./database.js";

const techs = getTechnologies();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = `<select name="technology">
    <option value="0">Select Your Tech</option>`
    const listItemsArray = techs.map(
        (tech) => {
            return `
            <option value="${tech.id}">${tech.name}</option>`
            }
        )
        html += listItemsArray.join("")

    html += "</select>"
    return html
}
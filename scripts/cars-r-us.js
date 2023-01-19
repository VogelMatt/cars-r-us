import { Wheels } from "./wheels.js"
import { Technologies } from "./technologies.js"
import { Colors } from "./paintjob.js"
import { Interiors } from "./interiors.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => { 
        if (event.target.id === "orderButton") {
            addCustomOrder();
        }
    }
)

export const carsRUs = () => {
    return `
        <h1>Cars-R-Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__color options">
                <h2>Colors</h2>
                <div>${Colors()}</div>
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                <div>${Wheels()}</div>
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                <div>${Interiors()}</div>
            </section>
            <section class="choices__technology options">
                <h2>Technologies</h2>
                <div>${Technologies()}</div>
            </section>
        </article>

        <article>
            <button id="orderButton">place car orders</button>
        </article>

        <article class="customOrders">
            <h2>Custom car Orders</h2>
            <div>${Orders()}</div>
        </article>
    `
}

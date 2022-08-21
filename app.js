import { html, render } from "lit-html";
import HomeView from "./src/HomeView";

let app = () => html`<div class="d-flex flex-column justify-content-center">
            <h1 class="d-flex justify-content-center">Car Lottery</h1>
            <app-home> </app-home>  
            </div>
`;

let update = () => render(app(), document.body);
update();

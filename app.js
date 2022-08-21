import { html, render } from "lit-html";
import HomeView from "./src/HomeView";

let app = () => html`
<section class="h-100">
    <header class="container h-100 m-3">
        <div class="d-flex align-items-center justify-content-center h-100">
        <div class="d-flex flex-column">
            <h1 class="m-auto">Car Lottery</h1>
        
            <app-home> </app-home>
        </div>
        </div>
    </header>
</section>
    
  
   
`;

let update = () => render(app(), document.body);
update();

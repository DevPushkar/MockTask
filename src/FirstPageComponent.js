import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";

export default class FirstPageComponent extends AbstractComponent {
  init() {
    this.parentView = document.querySelector("app-home");
  }

  render() {
    return html`
    <div class="container">
     <div class='Images-container'>
        <div class='Image-container responsive Car1'>
          <img src="./src/static/car2.jpeg" class="img-fluid card-image" width="400px" height="250px" alt="Responsive Image"/>
        </div>

        <div class='Image-container Other-cars mb-5'>
          <img src="./src/static/car1.jpeg" class="img-fluid card-image" width="400px" height="250px"/>
        </div>
        <div class='Image-container Other-cars'>
          <img src="./src/static/car3.jpeg" class="img-fluid card-image" width="400px" height="250px"/>
        </div>
      </div>
      <div class='Form d-flex flex-column align-items-center justify-content-center'>
          <span class="w-75">
            This is your first step for a new brand car. Please provide your
            email address
          </span>
          <input
          placeholder='Your email address'
            class="Input w-75"
            type="email"
            .value=${this.appState.email}
            @input=${(e) => {
              this.appState.email = e.target.value;
              this.refreshComponent();
            }}
          />
      </div>
    </div>
    `;
  }

  static register() {
    if (!customElements.get("app-firstpage")) {
      customElements.define("app-firstpage", FirstPageComponent);
    }
  }
}
FirstPageComponent.register();

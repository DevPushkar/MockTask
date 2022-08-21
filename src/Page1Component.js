import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";

export default class Page1Component extends AbstractComponent {
  init() {
    this.parentView = document.querySelector("app-home");
  }

  render() {
    return html`
    <div>
     <div class='Images-container col'>
          <div class='Image-container responsive Car1'>
            <img src="./src/static/car2.jpeg" class="img-fluid img-thumbnail" alt="Responsive Image"/>
          </div>

          <div class='Image-container Other-cars'>
          <img src="./src/static/car1.jpeg" class="img-fluid img-thumbnail"/>
          </div>
          <div class='Image-container Other-cars'>
          <img src="./src/static/car3.jpeg" class="img-fluid img-thumbnail"/>
          </div>
        </div>
        <div class='Form'>
          <span>
            This is your first step for a new brand car. Please provide your
            email address
          </span>
      <input
      placeholder='Your email address'
        class="Input"
        type="text"
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
    if (!customElements.get("app-page1")) {
      customElements.define("app-page1", Page1Component);
    }
  }
}
Page1Component.register();

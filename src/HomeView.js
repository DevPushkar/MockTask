import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";
import FirstPageComponent from "./FirstPageComponent";
import FourthPageComponent from "./FourthPageComponent";
import SecondPageComponent from "./SecondPageComponent";
import ThirdPageComponent from "./ThirdPageComponent";


const appState = {
  email: "",
  gender: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
};

export default class HomeView extends AbstractComponent {
  constructor() {
    super();
    this.currentIndex = 0;
    this.states = [
      () =>
        html`<app-firstpage
          .appState=${appState}
          @input=${() => {
            this.refreshComponent();
          }}
          ></app-firstpage
        >`,
      () =>
        html`<app-secondpage
          .appState=${appState}
          @input=${() => {
            this.refreshComponent();
          }}
          ></app-secondpage
        >`,
        () =>
        html`<app-thirdpage
          .appState=${appState}
          @input=${() => {
            this.refreshComponent();
          }}
          ></app-thirdpage
        >`,
             () =>
             html`<app-fourthpage
               .appState=${appState}
               @input=${() => {
                 this.refreshComponent();
               }}
               ></app-fourthpage
             >`
        ];
  }

  render() {
    const getCurrentComponent = this.states[this.currentIndex];
    console.log(this.states)
    console.log(this.currentIndex);
    return html`<div class="d-flex justify-content-center">
      ${getCurrentComponent()}
      </div>
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-primary m-4 ${this.currentIndex === this.states.length - 1
            ? "d-none"
            : ""}"
          @click=${() => {
            this.currentIndex += 1;
            this.refreshComponent();
          }}
        >
          Next
        </button>
        <button
          class="btn btn-secondary m-4 ${this.currentIndex === 0 ? "d-none" : ""}"
          @click=${() => {
            this.currentIndex -= 1;
            this.refreshComponent();
          }}
        >
          Back
        </button>
      </div>`;
  }

  static register() {
    if (!customElements.get("app-home")) {
      customElements.define("app-home", HomeView);
    }
  }
}
HomeView.register();

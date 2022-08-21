import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";
import Page1Component from "./Page1Component";
import Page2Component from "./Page2Component";

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
        html`<div class="row"><app-page1
          .appState=${appState}
          @input=${() => {
            this.refreshComponent();
          }}
          ></app-page1
        >`,
      () =>
        html`<app-page2
          .appState=${appState}
          @input=${() => {
            this.refreshComponent();
          }}
          ></app-page2
        ></div>`,
    ];
  }

  render() {
    const getCurrentComponent = this.states[this.currentIndex];
    return html`
      ${getCurrentComponent()}
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-primary mt-4 ${this.currentIndex === this.states.length - 1
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
          class="btn btn-secondary mt-4 ${this.currentIndex === 0 ? "d-none" : ""}"
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

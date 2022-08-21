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

  async _postData() {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    const resp = await fetch("http://localhost:3000/people", {
      method: "POST",
      body: JSON.stringify(appState),
      headers: myHeaders,
    });
    const respData = await resp.json();
    appState.id = respData.id;
    this.refreshComponent();
  }

  render() {
    const getCurrentComponent = this.states[this.currentIndex];
    console.log(this.states)
    console.log(this.currentIndex);
    return html`<div class="d-flex justify-content-center">
      ${getCurrentComponent()}
      </div>
      <div class="container">
      <div class="d-flex flex-sm-row flex-column justify-content-center mt-5 gap-3">
        <button
          class="btn btn-primary ${this.currentIndex === this.states.length - 1
            ? "d-none"
            : ""}"
          @click=${() => {
            if(this.currentIndex === 2) {
              this._postData()
            }
            this.currentIndex += 1;
            this.refreshComponent();
          }}
        >
          Next Step
        </button>
        <button
          class="btn btn-secondary ${this.currentIndex === 0 || this.currentIndex === this.states.length - 1 ? "d-none" : ""}"
          @click=${() => {
            this.currentIndex -= 1;
            this.refreshComponent();
          }}
        >
          Back
        </button>
        <button
          class="btn btn-primary ${this.currentIndex === this.states.length - 1 ? "" : "d-none"}"
          @click=${() => {
            window.location.reload();
          }}
        >
          Start New Application
        </button>
        </div>
      </div>`;
  }

  static register() {
    if (!customElements.get("app-home")) {
      customElements.define("app-home", HomeView);
    }
  }
}
HomeView.register();

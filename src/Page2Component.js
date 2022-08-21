import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";

export default class Page2Component extends AbstractComponent {
  render() {
    return html`
      <input
        type="text"
        .value=${this.appState.firstName}
        @input=${(e) => {
          this.appState.firstName = e.target.value;
          this.refreshComponent();
        }}
      />
    `;
  }

  static register() {
    if (!customElements.get("app-page2")) {
      customElements.define("app-page2", Page2Component);
    }
  }
}
Page2Component.register();

import { html, render } from "lit-html";

export default class AbstractComponent extends HTMLElement {
  connectedCallback() {
    this.preInit();
    this.init();
    this.refreshComponent();
    this.postInit();
  }

  static externalRefresh(component) {
    render(html`${component.render()}`, component);
  }

  preInit() {}
  init() {}
  postInit() {}

  refreshComponent() {
    render(html`${this.render()}`, this);
  }

  render() {}
}

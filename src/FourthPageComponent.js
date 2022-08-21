import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";

export default class FourthPageComponent extends AbstractComponent {
    render() {
        return html` <div class='Container'>
        <div class='Image-container'>
          <img src="./src/static/user.jpeg" width="250px" height="200px"/>
        </div>
        <div class='Form text-center'>
              <span>
                Congrats! <span class="text-primary"> ${this.appState?.firstName} ${this.appState?.lastName}!</span> Your application has <br /> already been sent
              </span
              >
        </div>

      </div>`;
    }
    static register() {
        if (!customElements.get("app-fourthpage")) {
          customElements.define("app-fourthpage", FourthPageComponent);
        }
      }
    }
    FourthPageComponent.register();
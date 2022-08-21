import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";

export default class ThirdPageComponent extends AbstractComponent {
    render() {
        return html`
        <div class='Container'>
          <div class='Image-container'>
            <img src="./src/static/car3.jpeg" class="img-fluid img-thumbnail" width="550px" height="200px"/>
          </div>
            <div class='Form text-center'>
              <span>
                OK! <span class="text-primary"> ${this.appState?.firstName} ${this.appState?.lastName}</span> last thing <br /> what we need is your <br /> photo.
              </span
              >
              <div class='Image-container'>
                <img src="./src/static/user.jpeg" width="100px" height="100px"/>
              </div>  
          </div>
            </div>
        </div>`;
    }
    static register() {
        if (!customElements.get("app-thirdpage")) {
          customElements.define("app-thirdpage", ThirdPageComponent);
        }
      }
    }
    ThirdPageComponent.register();
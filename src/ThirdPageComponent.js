import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";

export default class ThirdPageComponent extends AbstractComponent {
    render() {
        return html`
        <div class='Container'>
          <div class='Image-container'>
            <img src="./src/static/car3.jpeg" width="550px" height="200px" style="object-fit: cover; object-position: 50% 70%"/>
            <div class="progress" style="height: 1px;">
              <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
            <div class='Form text-center'>
              <span>
                OK! <span class="text-primary"> ${this.appState?.firstName} ${this.appState?.lastName}</span> last thing <br /> what we need is your <br /> photo.
              </span
              >
              <div class='Image-container'>
                <img src="./src/static/user.jpeg" width="100px" height="100px" class="m-3" style="border-radius: 15px"/>
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
import { html } from "lit-html";
import AbstractComponent from "./AbstractComponent";

export default class SecondPageComponent extends AbstractComponent {
  render() {
    console.log(this.appState);
    return html`
    <div class='Container'>
      <div class='Image-container'>
        <img src="./src/static/car1.jpeg" class="img-fluid img-thumbnail" width="550px" height="200px"/>
      </div>
        <div class='Form text-center'>
          <span>
            This is your first step for a new brand car. Please provide your
            email address
          </span>
          <div>
            <div class='form-check form-check-inline mt-1'>
              <input
                class='form-check-input'
                type='radio'
                name='gender'
                id='gender1'
                value='MALE'
                  @input=${(e) => {
                    this.appState.gender = e.target.value;
                    this.refreshComponent();
                  }}
                  ?checked=${this.appState?.gender === "MALE"}
              />
              <label class='form-check-label' htmlFor='gender1'>
                Male
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='radio'
                name='gender'
                id='gender2'
                value='FEMALE'
                  @input=${(e) => {
                    this.appState.gender = e.target.value;
                    this.refreshComponent();
                  }}
                ?checked=${this.appState?.gender === "FEMALE"}
              />
              <label class='form-check-label' htmlFor='gender2'>
                Female
              </label>
            </div>
          </div>
          <input
            placeholder='First name'
            type='text'
            class='Input'
            .value=${this.appState.firstName}
            @input=${(e) => {
            this.appState.firstName = e.target.value;
            this.refreshComponent();
            }}
          />
          <input
            placeholder='Last name'
            type='text'
            class='Input'
            .value=${this.appState.lastName}
            @input=${(e) => {
            this.appState.lastName = e.target.value;
            this.refreshComponent();
            }}
          />
          <input
            placeholder='Date of birth'
            type='text'
            class='Input'
            .value=${this.appState.dateOfBirth}
            @input=${(e) => {
            this.appState.dateOfBirth = e.target.value;
            this.refreshComponent();
            }}
          />
        </div>
        </div>
    `;
  }

  static register() {
    if (!customElements.get("app-secondpage")) {
      customElements.define("app-secondpage", SecondPageComponent);
    }
  }
}
SecondPageComponent.register();

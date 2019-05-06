import { Component, Prop, State } from "@stencil/core";
import { sayHello } from "../../helpers/utils";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.scss"
})
export class AppProfile {
  @State() state = false;
  @Prop() name?: string;

  // TODO: this is important
  formattedName(): string {
    if (this.name) {
      return (
        this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase()
      );
    }
    return "";
  }

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/" />
            </ion-buttons>
            <ion-title>Profile: {this.name}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <p>
            {sayHello()}! My name is {this.formattedName()}. My name was passed
            in through a route param!
          </p>

          <ion-item>
            <ion-label>Setting ({this.state.toString()})</ion-label>
            <ion-toggle
              checked={this.state}
              onIonChange={ev => (this.state = ev.detail.checked)}
            />
          </ion-item>

          <ion-item>
            <ion-label position="floating">E-Mail</ion-label>
            <ion-input type="text" />
          </ion-item>

          <ion-chip>
            <ion-label>Default</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-label color="secondary">Secondary Label</ion-label>
          </ion-chip>

          <ion-chip color="secondary">
            <ion-label color="dark">Secondary w/ Dark label</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-icon name="pin" />
            <ion-label>Default</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-icon name="heart" color="dark" />
            <ion-label>Default</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-label>Button Chip</ion-label>
            <ion-icon name="close-circle" />
          </ion-chip>

          <ion-chip>
            <ion-icon name="pin" color="primary" />
            <ion-label>Icon Chip</ion-label>
            <ion-icon name="close" />
          </ion-chip>

          <ion-chip>
            <ion-avatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </ion-avatar>
            <ion-label>Avatar Chip</ion-label>
            <ion-icon name="close-circle" />
          </ion-chip>
        </ion-content>
      </ion-app>
    );
  }
}

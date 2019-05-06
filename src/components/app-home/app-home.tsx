import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on{" "}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="ion-text-start">
                <h3>text-start</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                vehicula lorem.
              </div>
            </ion-col>
            <ion-col>
              <div class="ion-text-end">
                <h3>text-end</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                vehicula lorem.
              </div>
            </ion-col>
            <ion-col>
              <div class="ion-text-center">
                <h3>text-center</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                vehicula lorem.
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-text-justify">
                <h3>text-justify</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                vehicula lorem.
              </div>
            </ion-col>
            <ion-col>
              <div class="ion-text-wrap">
                <h3>text-wrap</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                vehicula lorem.
              </div>
            </ion-col>
            <ion-col>
              <div class="ion-text-nowrap">
                <h3>text-nowrap</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>
    ];
  }
}

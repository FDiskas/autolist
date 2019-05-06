import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "autolist",
  globalScript: "src/global/app.ts",
  globalStyle: "src/global/app.scss",
  outputTargets: [
    {
      type: "www",
      serviceWorker: {
        globPatterns: ["**/*.{js,css,json,html,ico,png}"]
      }
    },
    {
      type: "docs"
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/global/mixins.scss"]
    })
  ],
  devServer: {
    openBrowser: true
  }
};

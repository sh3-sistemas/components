import type { App } from "vue";
import * as components from "./components";

/** PrimeVue Config. */
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import ptBrLocale from "./theme/locale";
import Was from "./theme/presets/was";

function install(app: App) {
  app.directive("tooltip", Tooltip);
  app.use(PrimeVue, {
    unstyled: true,
    pt: Was,
    ripple: true,
    locale: {
      ...ptBrLocale,
    },
  });

  for (const key in components) {
    // @ts-ignore
    app.component(key, components[key]);
  }
}

import "./assets/main.css";

export default { install, components };

// export * from "./constants";
// export * from "./utils";

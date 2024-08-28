import type { App } from "vue";
import * as components from "./components";

/** PrimeVue Config. */
import { usePrimeVue } from "primevue/config";
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

  console.log({Was})

  app.mixin({
    created() {
      const primevue = usePrimeVue();
      primevue.config.pt = Was;
    },
  });

  for (const key in components) {
    // @ts-ignore
    app.component(key, components[key]);
    // @ts-ignore
    // console.log({ key, comp: components[key] })

  }
}

import "./assets/main.css";

export default { install, components };

export * from "./components";
export * from "./constants";
export * from "./utils";

import type { App } from "vue";
import * as components from "./components";

/** PrimeVue Config. */
import { usePrimeVue } from "primevue/config";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import ptBrLocale from "./theme/locale";

import Was from "./theme/presets/was";

import Vueform from '@vueform/vueform';
import vueformConfig from '../vueform.config';

function install(app: App) {
  app.use(Vueform, vueformConfig)
  app.directive("tooltip", Tooltip);
  app.use(PrimeVue, {
    unstyled: true,
    pt: Was,
    ripple: true,
    locale: {
      ...ptBrLocale,
    },
  });
  app.use(ConfirmationService);
  app.use(ToastService);

  app.mixin({
    created() {
      const primevue = usePrimeVue();
      primevue.config.pt = Was;
    },
  });

  for (const key in components) {
    // @ts-ignore
    app.component(key, components[key]);
  }
}

import "./assets/main.css";

export default { install, components };

export * from "./components";
export * from "./constants";
export * from "./utils";
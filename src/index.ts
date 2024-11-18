import type { App, Plugin } from "vue";
import * as components from "./components";
import "vue-toastification/dist/index.css";

/** PrimeVue Config. */
import { usePrimeVue } from "primevue/config";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import ptBrLocale from "./theme/locale";

import Was from "./theme/presets/was";

import Vueform from "@vueform/vueform";
import vueformConfig from "../vueform.config";

import Toast from "vue-toastification";
import { toastOptions } from "./services/toast/notification/types";

export default {
  install: (app: App) => {
    app.use(Vueform, vueformConfig);
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
    app.use(Toast, toastOptions);

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
  },
} satisfies Plugin;

import "./assets/main.css";

export * from "./apollo";
export * from "./services";
export * from "./components";
export * from "./utils";
export * from "./types";
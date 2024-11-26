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

import { ApolloClient } from "@apollo/client";

export default {
  install: (
    app: App,
    options: {
      apollo: {
        clients: Record<string, any>;
      };
    }
  ) => {
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

    const { clients } = options.apollo;
    app.provide("clients", clients);
    app.provide(ApolloClient, {
      ...clients,
    });

    for (const key in components) {
      // @ts-ignore
      app.component(key, components[key]);
    }
  },
} satisfies Plugin;

import "./assets/main.css";

export * from "./services";
export * from "./services/apollo";
export * from "./components";
export * from "./utils";
export * from "./types";
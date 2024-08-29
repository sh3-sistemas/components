
import type { ButtonEmits, ButtonProps, ButtonSlots } from "primevue/button";
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";

/**
 * **PrimeVue - PanelMenu**
 *
 * _PanelMenu is a hybrid of Accordion and Tree components._
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Sh3Button extends ClassComponent<ButtonProps, ButtonSlots, ButtonEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Sh3Button: GlobalComponentConstructor<Sh3Button>;
    }
}

export default Sh3Button;

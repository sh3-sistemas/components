/**
 *
 * Sh3IconButton is an extension to standard button element with icons and theming.
 *
 * [Primevue Based](https://www.primevue.org/button/)
 *
 * @module buttons
 *
 */
import type { ButtonEmits, ButtonProps, ButtonSlots } from "primevue/button";
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
import type { IconProps } from "@/types";

/**
 * Defines valid properties in Button component.
 */
export type Sh3IconButtonProps = {
    styling: string;
    icon: IconProps;
}

/**
 * **SH3 - Sh3IconButton**
 *
 * _Button is an extension to standard button element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3IconButton extends ClassComponent<Sh3IconButtonProps & Omit<ButtonProps, 'icon'>, ButtonSlots, ButtonEmits> { }
/**
 * **SH3 - Sh3Button**
 *
 * _Button is an extension to standard button element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3Button extends ClassComponent<ButtonProps, ButtonSlots, ButtonEmits> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3IconButton: GlobalComponentConstructor<Sh3IconButton>;
        Sh3Button: GlobalComponentConstructor<Sh3Button>;
    }
}
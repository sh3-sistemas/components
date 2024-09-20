/**
 * @module buttons
 */
import type { ButtonEmits, ButtonProps, ButtonSlots } from "primevue/button";
import type { OverlayPanelEmits, OverlayPanelProps, OverlayPanelSlots } from "primevue/overlaypanel";
import type {
  ClassComponent,
  GlobalComponentConstructor,
} from "primevue/ts-helpers";
import type { IconProps } from "@/types";

/**
 * Defines valid properties in IconButton component.
 */
export type Sh3IconButtonProps = {
  icon: IconProps;
};

/**
 * **SH3 - Sh3IconButton**
 *
 * _Button is an extension to standard button element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3IconButton extends ClassComponent<
  Sh3IconButtonProps & Omit<ButtonProps, "icon">,
  ButtonSlots,
  ButtonEmits
> {}
/**
 * **SH3 - Sh3Button**
 *
 * _Button is an extension to standard button element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3Button extends ClassComponent<
  ButtonProps,
  ButtonSlots,
  ButtonEmits
> {}

/**
 * Defines valid properties in PanelButton component.
 */
export type Sh3PanelButtonProps = {
    buttonProps: Sh3IconButtonProps;
    panelProps: OverlayPanelProps;
  };

/**
 * **SH3 - Sh3PanelButton**
 *
 * _PanelButton is an extension to standard OverlayPanel element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3PanelButton extends ClassComponent<
  Sh3PanelButtonProps,
  ButtonSlots & OverlayPanelSlots,
  ButtonEmits & OverlayPanelEmits
> {}

declare module "vue" {
  export interface GlobalComponents {
    Sh3IconButton: GlobalComponentConstructor<Sh3IconButton>;
    Sh3Button: GlobalComponentConstructor<Sh3Button>;
    Sh3PanelButton: GlobalComponentConstructor<Sh3PanelButton>;
  }
}

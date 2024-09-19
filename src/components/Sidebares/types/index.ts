/**
 *
 * Sh3ToggleSidebar is a Vue component.
 *
 * [Component](./Sh3ToggleSidebar.vue)
 *
 * @module sidebares
 *
 */
import type {
  ClassComponent,
  GlobalComponentConstructor,
} from "primevue/ts-helpers";
/**
 * **SH3 - Sh3ToggleSidebar**
 *
 * _Sh3ToggleSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3ToggleSidebar.vue)
 * @group Component
 *
 */
declare class Sh3ToggleSidebar extends ClassComponent<any, any, any> {}
/**
 * **SH3 - ToggleBigSidebar**
 *
 * _ToggleBigSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./ToggleBigSidebar.vue)
 * @group Component
 *
 */

export type ToggleIcon = {
  src: string;
  title: string;
};

export type ToggleSidebarStyle = {
  container: string;
  header: string;
  body: string;
  footer: string;
};

export type Sh3ToggleSidebarProps = {
  title: string;
  icon: ToggleIcon;
  styling: ToggleSidebarStyle;
};

declare module "vue" {
  export interface GlobalComponents {
    Sh3ToggleSidebar: GlobalComponentConstructor<Sh3ToggleSidebar>;
  }
}

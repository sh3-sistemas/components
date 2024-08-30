
/**
 * 
 * Sh3ToggleSidebar is a Vue component.
 * 
 * [Component](./Sh3ToggleSidebar.vue)
 * 
 * @module sidebares
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3ToggleSidebar**
 *
 * _Sh3ToggleSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3ToggleSidebar.vue)
 * @group Component
 *
 */
declare class Sh3ToggleSidebar extends ClassComponent<any, any, any> { }
/**
 * **SH3 - ToggleBigSidebar**
 *
 * _ToggleBigSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./ToggleBigSidebar.vue)
 * @group Component
 *
 */
declare class ToggleBigSidebar extends ClassComponent<any, any, any> { }
/**
 * **SH3 - ToggleSmallSidebar**
 *
 * _ToggleSmallSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./ToggleSmallSidebar.vue)
 * @group Component
 *
 */
declare class ToggleSmallSidebar extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3ToggleSidebar: GlobalComponentConstructor<Sh3ToggleSidebar>;
        ToggleBigSidebar: GlobalComponentConstructor<ToggleBigSidebar>;
        ToggleSmallSidebar: GlobalComponentConstructor<ToggleSmallSidebar>;
    }
}

export default { Sh3ToggleSidebar, ToggleBigSidebar, ToggleSmallSidebar };

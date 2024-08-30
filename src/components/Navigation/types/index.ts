
/**
 * 
 * Sh3UserNavbar is a Vue component.
 * 
 * [Component](./Sh3UserNavbar.vue)
 * 
 * @module navigation
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3UserNavbar**
 *
 * _Sh3UserNavbar is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3UserNavbar.vue)
 * @group Component
 *
 */
declare class Sh3UserNavbar extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3UserNavbar: GlobalComponentConstructor<Sh3UserNavbar>;
    }
}

export default Sh3UserNavbar;

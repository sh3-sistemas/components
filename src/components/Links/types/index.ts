
/**
 * 
 * Sh3Breadcrumb is a Vue component.
 * 
 * [Component](./Sh3Breadcrumb.vue)
 * 
 * @module links
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3Breadcrumb**
 *
 * _Sh3Breadcrumb is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Breadcrumb.vue)
 * @group Component
 *
 */
declare class Sh3Breadcrumb extends ClassComponent<any, any, any> { }

/**
 * **SH3 - Sh3MiniLink**
 *
 * _Sh3MiniLink is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3MiniLink.vue)
 * @group Component
 *
 */
declare class Sh3MiniLink extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3Breadcrumb: GlobalComponentConstructor<Sh3Breadcrumb>;
        Sh3MiniLink: GlobalComponentConstructor<Sh3MiniLink>;
    }
}

export default { Sh3Breadcrumb, Sh3MiniLink };


/**
 * 
 * Sh3LayoutMock is a Vue component.
 * 
 * [Component](./Sh3LayoutMock.vue)
 * 
 * @module layouts
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3LayoutMock**
 *
 * _Sh3LayoutMock is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3LayoutMock.vue)
 * @group Component
 *
 */
declare class Sh3LayoutMock extends ClassComponent<any, any, any> { }

/**
 * **SH3 - Sh3PageNotFound**
 *
 * _Sh3PageNotFound is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3PageNotFound.vue)
 * @group Component
 *
 */
declare class Sh3PageNotFound extends ClassComponent<any, any, any> { }

/**
 * **SH3 - Sh3Vertical**
 *
 * _Sh3Vertical is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Vertical.vue)
 * @group Component
 *
 */
declare class Sh3Vertical extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3Vertical: GlobalComponentConstructor<Sh3Vertical>;
        Sh3LayoutMock: GlobalComponentConstructor<Sh3LayoutMock>;
        Sh3PageNotFound: GlobalComponentConstructor<Sh3PageNotFound>;
    }
}

export default { Sh3Vertical, Sh3LayoutMock, Sh3PageNotFound };

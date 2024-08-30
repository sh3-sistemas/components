/**
 *
 * Sh3TextMiddleLine is an extension to standard title element with additional styling.
 *
 * [Primevue Based](https://www.primevue.org/title/)
 *
 * @module texts
 *
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3TextMiddleLine**
 *
 * _TextMiddleLine is an extension to standard title element with additional styling._
 * --- ---
 * @group Component
 *
 */
declare class Sh3TextMiddleLine extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3TextMiddleLine: GlobalComponentConstructor<Sh3TextMiddleLine>;
    }
}

export default { Sh3TextMiddleLine };

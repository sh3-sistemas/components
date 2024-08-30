
/**
 * 
 * Sh3ResponsiveModal is a Vue component.
 * 
 * [Component](./Sh3ResponsiveModal.vue)
 * 
 * @module modals
 * 
 */
import type { DialogEmits, DialogProps, DialogSlots } from "primevue/dialog";
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3ResponsiveModal**
 *
 * _Sh3ResponsiveModal is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3ResponsiveModal.vue)
 * @group Component
 *
 */
declare class Sh3ResponsiveModal extends ClassComponent<DialogProps, DialogSlots, DialogEmits> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3ResponsiveModal: GlobalComponentConstructor<Sh3ResponsiveModal>;
    }
}

/**
 * 
 * Sh3Accordion is a Vue component.
 * 
 * [Component](./Sh3Accordion.vue)
 * 
 * @module accordions
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3Accordion**
 *
 * _Sh3Accordion is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Accordion.vue)
 * @group Component
 *
 */
declare class Sh3Accordion extends ClassComponent<any, any, any> { }

export type AccordionItem = {
    title: string;
    links: Array<{
        tag: string;
        path: string;
    }>;
};

export interface Sh3PathAccordionProps {
    items: Array<AccordionItem>
}

/**
 * **SH3 - Sh3PathAccordion**
 *
 * _Sh3PathAccordion is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3PathAccordion.vue)
 * @group Component
 *
 */
declare class Sh3PathAccordion extends ClassComponent<Sh3PathAccordionProps, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3Accordion: GlobalComponentConstructor<Sh3Accordion>
        Sh3PathAccordion: GlobalComponentConstructor<Sh3PathAccordion>
    }
}

/**
 * 
 * Sh3RouterLinkTabs is a Vue component.
 * 
 * [Component](./Sh3RouterLinkTabs.vue)
 * 
 * @module tabs
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3RouterLinkTabs**
 *
 * _Sh3RouterLinkTabs is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3RouterLinkTabs.vue)
 * @group Component
 *
 */


type RouterTab = {
    name: string;
    label: string;
};

export interface Sh3RouterLinkTabsProps {
    tabGroup: Array<RouterTab>
}

declare class Sh3RouterLinkTabs extends ClassComponent<Sh3RouterLinkTabsProps, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3RouterLinkTabs: GlobalComponentConstructor<Sh3RouterLinkTabs>;
    }
}
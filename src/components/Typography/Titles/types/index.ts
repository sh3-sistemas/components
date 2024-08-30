/**
 *
 * Sh3FirstTitle is an extension to standard title element with additional styling.
 *
 * [Primevue Based](https://www.primevue.org/title/)
 *
 * @module titles
 *
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";

export type Sh3FirstTitleProps = object;
/**
 * **SH3 - Sh3FirstTitle**
 *
 * _FirstTitle is an extension to standard title element with additional styling._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3FirstTitle extends ClassComponent<Sh3FirstTitleProps, any, any> { }

export type Sh3SecondTitleProps = object;
/**
 * **SH3 - Sh3SecondTitle**
 *
 * _SecondTitle is an extension to standard title element with additional styling._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3SecondTitle extends ClassComponent<Sh3SecondTitleProps, any, any> { }

export type Sh3HighlightTitleProps = object;
/**
 * **SH3 - Sh3HighlightTitle**
 *
 * _HighlightTitle is an extension to standard title element with additional styling._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3HighlightTitle extends ClassComponent<Sh3HighlightTitleProps, any, any> { }

export type Sh3SectionTitleProps = object;
/**
 * **SH3 - Sh3SectionTitle**
 *
 * _SectionTitle is an extension to standard title element with additional styling._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3SectionTitle extends ClassComponent<Sh3SectionTitleProps, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3FirstTitle: GlobalComponentConstructor<Sh3FirstTitle>;
        Sh3SecondTitle: GlobalComponentConstructor<Sh3SecondTitle>;
        Sh3HighlightTitle: GlobalComponentConstructor<Sh3HighlightTitle>;
        Sh3SectionTitle: GlobalComponentConstructor<Sh3SectionTitle>;
    }
}
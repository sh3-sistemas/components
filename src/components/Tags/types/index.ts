/**
 *
 * [Primevue Based](https://v3.primevue.org/tag)
 * @module tags
 *
 */

import type { TagEmits, TagProps, TagSlots } from "primevue/tag";
import type {
  ClassComponent,
  GlobalComponentConstructor,
} from "primevue/ts-helpers";

/**
 * **SH3 - Sh3Tag**
 *
 * _Tag is an extension to standard tag element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3Tag extends ClassComponent<TagProps, TagSlots, TagEmits> {}

declare module "vue" {
  export interface GlobalComponents {
    Sh3Tag: GlobalComponentConstructor<Sh3Tag>;
  }
}

/**
 *
 * [Primevue Based](https://v3.primevue.org/datatable)
 * @module dataTables
 *
 */
import type {
  DataTableEmits,
  DataTableProps,
  DataTableSlots,
} from "primevue/datatable";
import type {
  ClassComponent,
  GlobalComponentConstructor,
} from "primevue/ts-helpers";

type ItemColum = {
  field: any;
  header: string;
  filterType: string;
  default: any;
  sortable: boolean;
  visible: boolean;
  editable: boolean;
};

export type Sh3DataTableEditableProps = DataTableProps & {
  updateRow: (row: object) => void;
  columns: Array<ItemColum>;
  emptyString: string;
};

/**
 * **SH3 - Sh3DataTableEditable**
 *
 * _Editable Data Table is an extension to standard DataTable element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */
declare class Sh3DataTableEditable extends ClassComponent<
  Sh3DataTableEditableProps,
  DataTableSlots,
  DataTableEmits
> {}

declare module "vue" {
  export interface GlobalComponents {
    Sh3DataTableEditable: GlobalComponentConstructor<Sh3DataTableEditable>;
  }
}

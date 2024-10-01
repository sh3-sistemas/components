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

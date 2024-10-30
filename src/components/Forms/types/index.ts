export type CrudOptions = {
    delete: boolean;
    save: boolean;
    cancel: boolean;
};

export type FormOptions = {
    crud: CrudOptions;
};

export interface Sh3GenericFormProps {
    submitForm: () => void;
    deleteRegister: () => void;
    options?: FormOptions;
}
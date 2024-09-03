import { PrimeIcons } from 'primevue/api';
import type { ConfirmationOptions } from "primevue/confirmationoptions";

export const confirmationBaseActions = {
    iconColor: 'text-grass-500',
    icon: PrimeIcons.CHECK_SQUARE,
    rejectClass: 'p-button-outlined p-button-sm',
    acceptClass: "success",
    rejectLabel: "Cancelar",
    acceptLabel: "Salvar",
}

export const confirmationDialogBase = (options: ConfirmationOptions) => {
    const { accept, reject } = options

    return {
        group: "confirmation",
        message: "",
        header: "Tem certeza que deseja salvar o cadastro selecionado?",
        ...confirmationBaseActions,
        accept,
        reject,
    }
}

export const deletionBaseActions = {
    iconColor: 'text-red-700',
    icon: PrimeIcons.EXCLAMATION_TRIANGLE,
    rejectClass: 'p-button-outlined p-button-sm',
    acceptClass: "danger",
    rejectLabel: "Cancelar",
    acceptLabel: "Excluir",
}

export const deletionDialogBase = (options: ConfirmationOptions) => {
    const { accept, reject } = options

    return {
        group: 'deletion',
        message: "Essa ação não poderá ser desfeita.",
        header: "Tem certeza que deseja excluir o cadastro selecionado?",
        ...deletionBaseActions,
        accept,
        reject,
    }
}

import { PrimeIcons } from 'primevue/api';
import type { ConfirmationOptions } from "primevue/confirmationoptions";

export const returnBaseActions = {
    iconColor: 'text-amber-600',
    icon: PrimeIcons.CHECK_CIRCLE,
    rejectClass: 'p-button-outlined p-button-sm',
    acceptClass: "warning",
    rejectLabel: "Cancelar",
    acceptLabel: "Retornar",
}

export const confirmationDialogBase = (options: ConfirmationOptions) => {
    const { accept, reject } = options

    return {
        group: "return",
        message: "Você pode ter alterações não salvas que serão perdidas.",
        header: "Tem certeza que deseja retornar?",
        ...returnBaseActions,
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

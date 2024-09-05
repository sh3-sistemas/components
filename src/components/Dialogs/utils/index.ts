import { PrimeIcons } from 'primevue/api';
import type { ConfirmationOptions } from "primevue/confirmationoptions";

export type DialogGroup = 'deletion' | 'confirmation' | 'return'
type DialogBase = Partial<ConfirmationOptions> & { iconColor: string };

export const returnBaseActions: DialogBase = {
    header: "Tem certeza que deseja retornar?",
    message: "Você pode ter alterações não salvas que serão perdidas.",
    iconColor: 'text-amber-600',
    icon: PrimeIcons.CHECK_CIRCLE,
    rejectClass: 'p-button-outlined p-button-sm',
    acceptClass: "warning",
    rejectLabel: "Cancelar",
    acceptLabel: "Retornar",
}

export const confirmationBaseActions: DialogBase = {
    header: "Tem certeza que deseja salvar este registro?",
    message: "Você poderá modificá-lo no futuro",
    iconColor: 'text-grass-500',
    icon: PrimeIcons.EXCLAMATION_TRIANGLE,
    rejectClass: 'p-button-outlined p-button-sm',
    acceptClass: "success",
    rejectLabel: "Cancelar",
    acceptLabel: "Confirmar",
}

export const deletionBaseActions: DialogBase = {
    header: "Tem certeza que deseja excluir o cadastro selecionado?",
    message: "Essa ação não poderá ser desfeita.",
    iconColor: 'text-red-700',
    icon: PrimeIcons.EXCLAMATION_TRIANGLE,
    rejectClass: 'p-button-outlined p-button-sm',
    acceptClass: "danger",
    rejectLabel: "Cancelar",
    acceptLabel: "Excluir",
}

/**
 * Cria uma configuração de diálogo combinando as opções fornecidas com as opções base.
 *
 * @param {DialogGroup} group - O grupo de diálogo ao qual este diálogo pertence.
 * @param {ConfirmationOptions} options - Opções específicas do diálogo, como ações de aceitação e rejeição.
 * @param {DialogBase} base - As opções base para o diálogo, contendo valores padrão para o cabeçalho e a mensagem.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas (do grupo, base e opções específicas).
 */
const dialogBase = (group: DialogGroup, options: ConfirmationOptions, base: DialogBase): ConfirmationOptions => {
    const { accept, reject } = options

    const header = options.header ?? base.header
    const message = options.message ?? base.message

    return {
        group,
        header,
        message,
        ...base,
        accept,
        reject,
    }
}

/**
 * Cria um diálogo de exclusão, combinando as opções fornecidas com as opções base de exclusão.
 *
 * @param {ConfirmationOptions} options - Opções específicas para o diálogo de exclusão, como ações de aceitação e rejeição.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas para o diálogo de exclusão.
 */
export const deletionDialogBase = (options: ConfirmationOptions): ConfirmationOptions => dialogBase('deletion', options, deletionBaseActions);

/**
 * Cria um diálogo de confirmação, combinando as opções fornecidas com as opções base de confirmação.
 *
 * @param {ConfirmationOptions} options - Opções específicas para o diálogo de confirmação, como ações de aceitação e rejeição.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas para o diálogo de confirmação.
 */
export const confirmationDialogBase = (options: ConfirmationOptions): ConfirmationOptions => dialogBase('confirmation', options, confirmationBaseActions);

/**
 * Cria um diálogo de retorno, combinando as opções fornecidas com as opções base de confirmação.
 *
 * @param {ConfirmationOptions} options - Opções específicas para o diálogo de retorno, como ações de aceitação e rejeição.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas para o diálogo de retorno.
 */
export const returnDialogBase = (options: ConfirmationOptions): ConfirmationOptions => dialogBase('return', options, confirmationBaseActions);

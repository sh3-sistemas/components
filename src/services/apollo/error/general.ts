import { customToast as toast } from 'sh3-components'
import type { ErrorResponse } from '@apollo/client/link/error'

export const networkError = (error: ErrorResponse) => {
  if (!error.networkError) return

  toast.error('Erro de conexão com o servidor.')
}

import { ref, Ref, inject } from 'vue'

export type Notification = {
  id: number
  message: string
}

type Toasts = Ref<Array<Notification>>

const TIMEOUT = 3140

export function useToast() {
  // we are injecting this from app instance
  const toasts: Toasts = inject('toasts') || ref([])

  function toast(message: string) {
    addToast(message, toasts)
  }

  return { toasts, toast }
}

function addToast(message: string, toasts: Toasts) {
  const id = new Date().getTime()
  toasts.value.push({
    id,
    message,
  })

  // remove this toast after timeout
  setTimeout(() => {
    removeToast(id, toasts)
  }, TIMEOUT)
}

export function removeToast(id: number, toasts: Toasts) {
  toasts.value = toasts.value.filter((toast) => toast.id !== id)
}

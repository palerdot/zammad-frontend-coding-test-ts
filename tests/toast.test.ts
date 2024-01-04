// @vitest-environment happy-dom

import { describe, test, expect } from 'vitest'
import { ref } from 'vue'

import { withSetup } from './test-utils'
import { useToast } from '../src/hooks/useToast'

// ref: https://vuejs.org/guide/scaling-up/testing#testing-composables

describe('Toast tests', () => {
  test('useToast is working fine', () => {
    const [result, app] = withSetup(() => useToast())
    // injecting value
    const toasts = ref([])
    app.provide('toasts', toasts)

    expect(result.toasts.value).toHaveLength(0)
    expect(result.toasts.value).toEqual([])

    // add a toast message
    result.toast('Testing toast')

    expect(result.toasts.value).toHaveLength(1)
    expect(result.toasts.value[0]).toMatchObject({
      message: 'Testing toast',
    })

    // unmount after test
    app.unmount()
  })
})

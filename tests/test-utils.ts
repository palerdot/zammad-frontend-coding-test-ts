// ref: https://vuejs.org/guide/scaling-up/testing#testing-composables
// test-utils.js
import { createApp } from 'vue'

export function withSetup(composable) {
  let result
  const app = createApp({
    setup() {
      result = composable()
      // suppress missing template warning
      return () => {}
    },
  })
  app.mount(document.createElement('div'))
  // return the result and the app instance
  // for testing provide/unmount
  return [result, app]
}

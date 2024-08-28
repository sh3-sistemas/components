import { defineCustomElement } from 'vue'

// vue SFC
import Sh3Button from './Buttons/Sh3Button.vue'

// turn component into web components
export const Sh3Button = defineCustomElement(Sh3Button)

// register global typings
declare module 'vue' {
  export interface GlobalComponents {
    'Sh3Button': typeof Sh3Button,
  }
}
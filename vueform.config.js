import pt_BR from '@vueform/vueform/locales/pt_BR'
import tailwind from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'
import PluginMask from '@vueform/plugin-mask'
import '@vueform/vueform/types/index.d.ts'

export default defineConfig({
  theme: tailwind,
  locales: { pt_BR },
  locale: 'pt_BR',
  // classHelpers: true,
  plugins: [PluginMask]
})

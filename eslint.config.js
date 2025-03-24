// eslint.config.js (ESM) or eslint.config.cjs (CommonJS)

import vue from 'eslint-plugin-vue'
import tsPlugin, { configs as tsConfigs } from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import { defineConfig } from 'eslint-define-config'

export default defineConfig([
  {
    // Optional: files to ignore
    ignores: ['node_modules', 'dist']
  },
  {
    // Apply these rules to .ts and .vue files
    files: ['**/*.ts', '**/*.vue'],

    // Language & parsing options
    languageOptions: {
      // The primary parser that can understand SFC <template> + <script>
      parser: vueParser,
      parserOptions: {
        // Delegate <script lang="ts"> blocks to @typescript-eslint/parser
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },

    // Declare plugins
    plugins: {
      vue,                        // "vue" plugin
      '@typescript-eslint': tsPlugin
    },

    // Combine recommended rule sets + your custom overrides
    rules: {
      // Merge in recommended rules
      ...vue.configs['recommended'].rules,

      // Merge in @typescript-eslint recommended rules
      ...tsConfigs.recommended.rules
    }
  }
])

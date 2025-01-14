import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // projectId: 'imm2mkpv',
    projectId: 'bc2wocjv',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AZ-204 Azure CLI Glossary",
  description: "AZ-204 Azure CLI Glossary",
  base: "/az204-azure-cli-glossary/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Common', items: [
          { text: 'Common', link: '/common/' },
          { text: 'Resource Group', link: '/resourcegroup/' }
        ]
      },
      {
        text: 'Compute', items: [
          { text: 'Azure Function', link: '/function/' },
          { text: 'Logic Apps', link: '/logicapps/' },
          { text: 'VM', link: '/vm/' },
          { text: 'Web App', link: '/webapp/' }
        ]
      },
      {
        text: 'Database/Storage', items: [
          { text: 'Cosmos DB', link: '/cosmos/' },
          { text: 'Storage Account', link: '/storageaccount/' }
        ]
      },
      {
        text: 'Event Driven', items: [
          { text: 'Event Hub', link: '/eventhub/' }
        ]
      },
      {
        text: 'Security', items: [
          { text: 'Key Vault', link: '/keyvault/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bervProject/az204-azure-cli-glossary' }
    ]
  }
})

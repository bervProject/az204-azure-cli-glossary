module.exports = {
  title: 'Azure CLI Glossary',
  description: 'Preparation for AZ-204, collection of usefull command to have more knowledge and pass your certification!',
  plugins: ['@vuepress/back-to-top', '@vuepress/last-updated', '@vuepress/active-header-links'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Common', link: '/common/' },
      { text: 'Resource Group', link: '/resourcegroup/' },
      { text: 'Web App', link: '/webapp/' },
      { text: 'Github', link: 'https://github.com/berviantoleo/az204-azure-cli-glossary' }
    ]
  },
  base: process.env.BASE_URL || "/",
}
module.exports = {

  locales: {
    '/': {
      lang: 'en-US',
      title: 'My Docs Project',
      description: '🛠️ A description here'
    }
  },

  themeConfig: {
    repo: '',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on Github',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Overview',
          link: '/guide/',
          collapsable: true
        },

        {
          text: 'Installation',
          link: '/guide/installation'
        },
      ]
    }
  },

  markdown: {
    lineNumbers: true
  }
}
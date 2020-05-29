module.exports = {
  title: 'osueasy',
  tagline: 'Easy osu bancho interfacing',
  url: 'https://osueasy.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Anton1337', // Usually your GitHub org/user name.
  projectName: 'osueasy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'osueasy',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Anton1337/osueasy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/installation/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/osueasy',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/tVZAXR9',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AntonOsuYT',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Author',
              href: 'https://anton.best/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Anton1337/osueasy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} osueasy, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Anton1337/osueasy-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

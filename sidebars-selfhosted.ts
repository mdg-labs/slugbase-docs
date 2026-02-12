import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Selfhosted documentation sidebar
 */
const sidebars: SidebarsConfig = {
  selfhostedSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'setup',
        'login',
        'password-reset',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'dashboard',
        'bookmarks',
        'folders',
        'tags',
        'shared',
      ],
    },
    {
      type: 'category',
      label: 'User Features',
      items: [
        'profile',
        'search-engine-guide',
        'demo',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin',
        'oidc-setup',
      ],
    },
  ],
};

export default sidebars;

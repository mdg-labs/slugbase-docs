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
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference',
        'api-reference-csrf-health',
        'api-reference-auth',
        'api-reference-password-reset',
        'api-reference-email-verification',
        'api-reference-bookmarks',
        'api-reference-folders',
        'api-reference-tags',
        'api-reference-users',
        'api-reference-teams',
        'api-reference-tokens',
        'api-reference-config',
        'api-reference-oidc-providers',
        'api-reference-admin-users',
        'api-reference-admin-teams',
        'api-reference-admin-settings',
        'api-reference-admin-stats',
        'api-reference-dashboard',
        'api-reference-go',
      ],
    },
  ],
};

export default sidebars;

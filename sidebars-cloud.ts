import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Cloud documentation sidebar
 */
const sidebars: SidebarsConfig = {
  cloudSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'auth',
      label: 'Authentication',
    },
    {
      type: 'doc',
      id: 'data-privacy',
      label: 'Data Privacy',
    },
    {
      type: 'doc',
      id: 'plans-billing',
      label: 'Plans & Billing',
    },
    {
      type: 'doc',
      id: 'features',
      label: 'Features and User Guide',
    },
    {
      type: 'doc',
      id: 'dashboard',
      label: 'Dashboard',
    },
    {
      type: 'doc',
      id: 'bookmarks',
      label: 'Bookmarks',
    },
    {
      type: 'doc',
      id: 'folders',
      label: 'Folders',
    },
    {
      type: 'doc',
      id: 'tags',
      label: 'Tags',
    },
    {
      type: 'doc',
      id: 'shared',
      label: 'Shared',
    },
    {
      type: 'doc',
      id: 'profile',
      label: 'Profile',
    },
    {
      type: 'doc',
      id: 'login',
      label: 'Login Page',
    },
    {
      type: 'doc',
      id: 'password-reset',
      label: 'Password Reset',
    },
    {
      type: 'doc',
      id: 'search-engine-guide',
      label: 'Search Engine Guide',
    },
    {
      type: 'doc',
      id: 'admin',
      label: 'Admin',
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference',
        'api-reference-cloud-only',
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

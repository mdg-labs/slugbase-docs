import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebars configuration for Cloud and Selfhosted documentation
 */
const sidebars: SidebarsConfig = {
  // Cloud documentation sidebar
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
  ],

  // Selfhosted documentation sidebar
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
        'Setup',
        'Login',
        'PasswordReset',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'Dashboard',
        'Bookmarks',
        'Folders',
        'Tags',
        'Shared',
      ],
    },
    {
      type: 'category',
      label: 'User Features',
      items: [
        'Profile',
        'SearchEngineGuide',
        'Demo',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'Admin',
        'OIDC_Setup',
      ],
    },
  ],
};

export default sidebars;

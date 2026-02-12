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
  ],
};

export default sidebars;

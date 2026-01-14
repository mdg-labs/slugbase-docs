import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          SlugBase Documentation
        </Heading>
        <p className="hero__subtitle">
          Your links. Your structure. Your language. Your rules.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="SlugBase Documentation - Your links. Your structure. Your language. Your rules.">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">📚 Bookmark Management</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Store and organize your bookmarks with titles, URLs, and optional custom slugs. 
                    Create a personal knowledge base of your favorite links.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">🏷️ Organization Tools</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Organize bookmarks using folders, tags, and filters. 
                    Flexible labeling system with many-to-many relationships.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">🔗 Link Forwarding</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Expose your bookmarks as short redirect URLs using the format 
                    <code>{'/{user_key}/{slug}'}</code>. Perfect for creating memorable, shareable links.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">👥 Sharing & Collaboration</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Share bookmarks and folders with teams or individual users. 
                    Access all shared content in a dedicated shared view.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">🔐 Authentication Options</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Login with OIDC providers (GitHub, Google Workspace) or use local 
                    email/password authentication. Full admin system included.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">🌐 Internationalization</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Full i18n support with multiple languages (English, German, French) 
                    and easy extension for more languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

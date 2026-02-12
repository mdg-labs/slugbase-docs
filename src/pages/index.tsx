import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import React from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          SlugBase
        </Heading>
        <p className="hero__subtitle">
          Your links. Your structure. Your language. Your rules.
        </p>
        <p className={styles.tagline}>
          An open-source, self-hosted bookmark manager with optional link forwarding.
          Take control of your bookmarks and create your personal knowledge base.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/selfhosted/intro">
            Get Started - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/selfhosted/setup">
            Setup Guide →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="SlugBase Documentation - Your links. Your structure. Your language. Your rules.">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className={styles.featuresSection}>
            <Heading as="h2" className={styles.sectionTitle}>
              Powerful Features
            </Heading>
            <p className={styles.sectionDescription}>
              Everything you need to manage, organize, and share your bookmarks effectively.
            </p>
          </div>
          
          <div className="row margin-vert--lg">
            <div className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                  <Heading as="h3">📚 Bookmark Management</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Store and organize your bookmarks with titles, URLs, and optional custom slugs. 
                    Create a personal knowledge base of your favorite links with full control over your data.
                  </p>
                  <Link to="/selfhosted/bookmarks" className={styles.cardLink}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                  <Heading as="h3">🏷️ Organization Tools</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Organize bookmarks using folders, tags, and filters. 
                    Flexible labeling system with many-to-many relationships for maximum flexibility.
                  </p>
                  <Link to="/selfhosted/folders" className={styles.cardLink}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                  <Heading as="h3">🔗 Link Forwarding</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Expose your bookmarks as short redirect URLs using the format
                    <code>{'/{user_key}/{slug}'}</code>. Perfect for creating memorable, shareable links.
                  </p>
                  <Link to="/selfhosted/intro" className={styles.cardLink}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                  <Heading as="h3">👥 Sharing & Collaboration</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Share bookmarks and folders with teams or individual users. 
                    Access all shared content in a dedicated shared view for seamless collaboration.
                  </p>
                  <Link to="/selfhosted/shared" className={styles.cardLink}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                  <Heading as="h3">🔐 Authentication Options</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Login with OIDC providers (GitHub, Google Workspace) or use local 
                    email/password authentication. Full admin system included for complete control.
                  </p>
                  <Link to="/selfhosted/login" className={styles.cardLink}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                  <Heading as="h3">🌐 Internationalization</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Full i18n support with multiple languages (English, German, French)
                    and easy extension for more languages. Use SlugBase in your preferred language.
                  </p>
                  <Link to="/selfhosted/intro" className={styles.cardLink}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <div className="card">
              <div className="card__body">
                <Heading as="h2">Ready to get started?</Heading>
                <p>
                  Set up your own SlugBase instance in minutes. Self-hosted, privacy-focused, and fully customizable.
                </p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--primary button--lg"
                    to="/selfhosted/setup">
                    Start Setup →
                  </Link>
                  <Link
                    className="button button--outline button--secondary button--lg"
                    to="/selfhosted/intro">
                    Read Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

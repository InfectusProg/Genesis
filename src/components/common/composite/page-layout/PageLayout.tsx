import React, { ReactNode } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  description,
  children,
  className,
}: PageLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Brain</title>
        <meta property="og:title" content="Brain" />
        <meta property="og:site_name" content="Education" />
        <meta property="og:image" content="/assets/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="M93dY9EuPcQ5AzSYwxc6_el0GwZp_XlDHBhphP6z-7g"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-GXYG7SJKYT');
                `,
          }}
        />
        {description && (
          <meta property="og:description" content={description} />
        )}
      </Head>
      <div className={styles['page'] + ' ' + className}>{children}</div>
    </div>
  );
};

export default PageLayout;

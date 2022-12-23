import Head from "next/head";

type MetadataProps = {
  title: string;
  description: string;
};

import React from "react";

const Metadata = ({ title, description }: MetadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="shortcut icon"
        href="/favicon/favicon.ico"
        type="image/x-icon"
      />
    </Head>
  );
};

export default Metadata;

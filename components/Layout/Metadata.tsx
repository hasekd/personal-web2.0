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
    </Head>
  );
};

export default Metadata;

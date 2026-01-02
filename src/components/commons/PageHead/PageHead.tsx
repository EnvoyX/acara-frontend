import { PropTypes } from "@/utils/interface";
import Head from "next/head";

const PageHead = (props: PropTypes) => {
  const { title = "Acara" } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/general/huohuo.png" type="image/x-icon" />
    </Head>
  );
};

export default PageHead;

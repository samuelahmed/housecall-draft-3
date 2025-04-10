import { type NextPage } from "next";
import Head from "next/head";
import SupportLayout from "~/components/support/supportLayout";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact page of House Call to help users access support or find answers to their questions"
        />
      </Head>
      <div className="min-h-screen px-4 py-4 md:px-8 md:py-8">
        <SupportLayout />
      </div>
    </>
  );
};

export default Contact;

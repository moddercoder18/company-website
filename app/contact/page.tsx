import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Contact us to discuss the endless possibilities for your digital ventures. Contact us via our Contact page and let's work together to make your ideas a reality."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

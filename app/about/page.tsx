import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Welcome to Modder Coder IT Solution Private Limited, your partner in developing advanced web and mobile applications from business ideas!
        Modder Coder IT Solution specializes in providing cutting-edge custom software development services tailored to our clients' specific requirements. Our objective is to empower businesses by making their unique ideas a reality through cutting-edge online and mobile applications. We take pride in creating solutions that not only meet but surpass our clients' expectations, thanks to our team of competent and experienced developers."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

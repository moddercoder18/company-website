import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Modder Coder IT Solution crafts cutting-edge software solutions with a client-centric approach, specializing in custom software, online, and mobile app development. Our dedication to innovation, on-time delivery, and scalability positions us as your valued partner on the digital transformation journey."
      />
      <Features showTitle={false} />
    </>
  );
};

export default ServicesPage;

"use client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Apply to get a home."
        description="We believe that every homebuyer is unique, and that's why we offer personalized assistance 
        every step of the way. Our experienced real estate agents take the time to understand your specific 
        requirements, whether it's a cozy apartment, a spacious family home, or an investment property."
      />
      <Contact />
    </>
  );
};

export default ContactPage;

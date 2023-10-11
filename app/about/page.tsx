'use client'
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const AboutPage = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  return (
    <>
      <Breadcrumb
        pageName="Financing/Credit Check Information"
        description="We maintain strict confidentiality and follow industry-best practices to protect your personal and financial 
        information throughout the process. Your trust in us is paramount, and we are committed to safeguarding your 
        data at all times."
      />
        <div className="container">
        <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="ml-5">
                      <h3 className="text-gray-500 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        {session?.data?.user?.email}
                      </h3>
                    </div>
                </div>
        </div>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

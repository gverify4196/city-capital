import Image from "next/image";
import NewsLatterBox from "../Contact/NewsLatterBox";
import NewsLatterBoxII from "../Contact/NewsLatterBoxII";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-10 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <NewsLatterBox/>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <NewsLatterBoxII/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

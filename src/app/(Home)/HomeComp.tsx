"use client";

import "aos/dist/aos.css";
import AboutContent from "./_components/AboutContent";
import Academic from "./_components/Academic";
import Faq from "./_components/Faq";
import FormContent from "./_components/FormContent";
import { HeroSection } from "./_components/HeroSection";
import LongContent from "./_components/LongContent";
import Rating from "./_components/Rating";
import Sample from "./_components/Sample";
import SmallDivider from "./_components/SmallDivider";
import TrustReview from "./_components/TrustReview";
import WhyUs from "./_components/WhyUs";
import WorkFlow from "./_components/WorkFlow";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/common/Loader";

const HomeComp = () => {
  const [homeData, setHomeData] = useState<any>();

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await axios.get<any>(
          "/api/fetch-homeData");
        setHomeData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHomeData();
  }, []);
  return (
    <>
      {!homeData ? (
        <Loader />
      ) : (
        <div>
          <HeroSection homeData={homeData} />
          <WorkFlow />
          <AboutContent />
          <FormContent />
          <LongContent />
          <WhyUs />
          <Faq />
          <SmallDivider />
          <TrustReview />
          <Rating />
          <Academic />
          <Sample />
        </div>
      )}
    </>
  );
};

export default HomeComp;

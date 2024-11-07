import "aos/dist/aos.css";
import { Metadata } from "next";
import HomeComp from "./HomeComp";

export const metadata: Metadata = {
  title: " Take My Online Class for me ",
  description:
    "Pay Someone to Taking My Classes Online for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!",
};

const Page = () => {
  return (
    <div>
      <HomeComp />
    </div>
  );
};

export default Page;

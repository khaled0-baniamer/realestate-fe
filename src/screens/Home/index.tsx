"use client";;
import HeroSection from "./HeroSection";
import LastestListings from "./LatestListings";
import Testimonials from "./Testimonials";
import TrendingArea from "./TrendingArea";


const HomeScreen: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrendingArea />
      <LastestListings />
      <Testimonials />
    </div>
  );
};

export default HomeScreen;

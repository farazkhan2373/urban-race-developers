import HeroHomePage from "@/components/HomePageComponents/HeroHomePage";
import AboutHomePage from "@/components/HomePageComponents/AboutHomePage";
import ContactHomePage from "@/components/HomePageComponents/ContactHomePage";
import ApartmentSectionHome from "@/components/HomePageComponents/ApartmentSectionHome"
import Image from "next/image";
import ServicesOverviewHome from "@/components/HomePageComponents/ServicesOverviewHome";
import TestimonialsSection from "@/components/HomePageComponents/TestimonialsSection";
import MapSection from "@/components/HomePageComponents/MapSection";

export default function Home() {
  return (
   <>
   <HeroHomePage/>
   <AboutHomePage/>
   <ContactHomePage/>
   <ApartmentSectionHome/>
   <ServicesOverviewHome/>
   <TestimonialsSection/>
   <MapSection/>
   </>
  );
}

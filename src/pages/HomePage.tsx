import BrandSection from "@/components/homePageComponents/BrandSection";
// import CarouselComponent from "@/components/homePageComponents/CarouselComponent";
import CashBackOffer from "@/components/homePageComponents/CashBackOffer";
import Faq from "@/components/homePageComponents/Faq";
import Footer from "@/components/shared/Footer";
import HorizontalRuler from "@/components/homePageComponents/HorizontalRuler";
import Navbar from "@/components/shared/Navbar";
import OfferSection from "@/components/homePageComponents/OfferSection";
import PopularOffer from "@/components/homePageComponents/PopularOffer";
import ReviewSection from "@/components/homePageComponents/ReviewSection";
import TrabdingProduct from "@/components/homePageComponents/TrabdingProduct";
import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import ListPage from "./ListPage";

const HomePage: React.FC = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/users/check-auth",
  //         {
  //           withCredentials: true, // Ensures cookies are sent with the request
  //         }
  //       );

  //       if (response.status !== 200) {
  //         navigate("/"); // Redirect to login if token is invalid
  //       }
  //     } catch (error) {
  //       console.error("Authentication failed:", error);
  //       navigate("/"); // Redirect to login if there's an error
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  return (
    <div className="">
      <Navbar />
      {/* <CarouselComponent /> */}

      <OfferSection />
      <HorizontalRuler />
      <BrandSection />
      <TrabdingProduct />
      <PopularOffer />
      <CashBackOffer />
      <ReviewSection />
      <Faq />

      <Footer />
    </div>
  );
};

export default HomePage;

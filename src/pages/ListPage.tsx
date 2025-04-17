import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import ListPageHeader from "@/components/listPageComponents/ListPageHeader";
import BestDealsTabs from "@/components/listPageComponents/BestDealsTabs";
import ListPagePreeFooterSection from "@/components/listPageComponents/ListPagePreeFooterSection";
const ListPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ListPageHeader />
      <BestDealsTabs />
      <ListPagePreeFooterSection />
      <Footer />
    </div>
  );
};

export default ListPage;

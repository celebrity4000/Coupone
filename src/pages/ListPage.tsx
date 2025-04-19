import Footer from "@/components/shared/Footer";
import React from "react";
import ListPageHeader from "@/components/listPageComponents/ListPageHeader";
import BestDealsTabs from "@/components/listPageComponents/BestDealsTabs";
import ListPagePreeFooterSection from "@/components/listPageComponents/ListPagePreeFooterSection";
const ListPage: React.FC = () => {
  return (
    <div>
      <ListPageHeader />
      <BestDealsTabs />
      <ListPagePreeFooterSection />
      <Footer />
    </div>
  );
};

export default ListPage;

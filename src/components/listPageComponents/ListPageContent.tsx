import BestDealsTabs from "@/components/listPageComponents/BestDealsTabs";
import React from "react";

import ListPageHeader from "./ListPageHeader";
import ListPagePreeFooterSection from "./ListPagePreeFooterSection";

const ListPageContent: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto">
      <ListPageHeader />

      <div>
        <BestDealsTabs />
      </div>

      <ListPagePreeFooterSection />
    </div>
  );
};

export default ListPageContent;

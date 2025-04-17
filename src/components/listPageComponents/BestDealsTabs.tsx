import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BestDealsCard from "./BestDealsCard";

const BestDealsTabs: React.FC = () => {
  const [defaultSelect1, setDefaultSelect1] = useState("Categories");

  return (
    <div>
      <Tabs defaultValue="filters" className=" mx-auto">
        <TabsList className="grid grid-cols-4  gap-4 justify-items-center items-center w-full !bg-none">
          <TabsTrigger
            value="filters"
            className="!font-semibold !font-poppins !text-[20px] !leading-[40px] !bg-custom-gradient !text-black !rounded-[10px]  !shadow-custom w-full !max-w-[215px] !h-[70px] !p-0"
          >
            Filters
          </TabsTrigger>
          <TabsTrigger
            value="categories"
            className="!font-semibold !font-poppins !text-[20px] !leading-[40px] !bg-custom-gradient !text-black !rounded-[10px]  !shadow-custom w-full !max-w-[215px] !h-[70px] !p-0 "
            onClick={() => setDefaultSelect1("apple")}
          >
            <Select>
              <SelectTrigger className=" !h-full !bg-inherit !border-none !outline-none focus:!outline-none hover:!bg-inherit focus:!bg-inherit !bg-custom-gradient ">
                <SelectValue placeholder={defaultSelect1} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </TabsTrigger>
          <TabsTrigger
            value="location"
            className="!font-semibold !font-poppins !text-[20px] !leading-[40px] !bg-custom-gradient !text-black !rounded-[10px]  !shadow-custom w-full !max-w-[215px] !h-[70px] !p-0"
          >
            <Select>
              <SelectTrigger className=" !h-full !bg-inherit !border-none !outline-none focus:!outline-none hover:!bg-inherit focus:!bg-inherit !bg-custom-gradient ">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Location</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </TabsTrigger>
          <TabsTrigger
            value="pricing"
            className="!font-semibold !font-poppins !text-[20px] !leading-[40px] !bg-custom-gradient !text-black !rounded-[10px]  !shadow-custom w-full !max-w-[215px] !h-[70px] !p-0 focus:!bg-[#248D50]"
          >
            <Select>
              <SelectTrigger className=" !h-full !bg-inherit !border-none !outline-none focus:!outline-none hover:!bg-inherit  !bg-custom-gradient focus:!bg-[#248D50]">
                <SelectValue placeholder="Pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pricing</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </TabsTrigger>
        </TabsList>
        <div className="mt-20">
          <TabsContent value="filters">
            <div>
              <BestDealsCard />
            </div>
          </TabsContent>
          <TabsContent value="categories">
            <div>Categories Section</div>
          </TabsContent>
          <TabsContent value="location">
            <div>Location Section</div>
          </TabsContent>
          <TabsContent value="pricing">
            <div>Pricing Section</div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default BestDealsTabs;

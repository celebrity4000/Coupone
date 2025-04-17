import React from "react";
import instagram from "../../assets/instagram.png";
import logos_facebook from "../../assets/logos_facebook.png";
import logos_telegram from "../../assets/logos_telegram.png";
import twitter from "../../assets/twitter.png";
import footerImage from "../../assets/footerImage.png";
import iconRightarrow from "../../assets/iconRightarrow.png";

const Footer: React.FC = () => {
  // Social Media Icons
  const socialMedia = [
    { src: instagram, alt: "Instagram" },
    { src: logos_facebook, alt: "Facebook" },
    { src: logos_telegram, alt: "Telegram" },
    { src: twitter, alt: "Twitter" },
  ];

  // Footer Sections
  const footerSections = [
    {
      title: "Help & Support",
      items: ["Contact Us", "FAQ", "How It Works", "Missing Cashback Claims"],
    },
    {
      title: "Company Name",
      items: ["About Us", "Press", "Media", "Privacy policy", "Terms & policy"],
    },
    {
      title: "Earning Programs",
      items: ["Affiliate Program", "Refer & Earn", "Deals & Coupons"],
    },
  ];

  return (
    <div className="bg-[#011F02]  px-[10px] md:px-[80px] py-[34px] text-white mt-12">
      <div className="flex flex-col w-full">
        <div className="flex row1 w-full justify-center md:justify-between items-start flex-wrap gap-8">
          {/* Logo Section */}
          <div className="w-[212px]">
            <div className="flex flex-col items-center gap-3">
              <div className="leading-[48px] text-[#F0F0F0] text-[32px] font-semibold">
                Logo
              </div>
              <p className="leading-[24px] text-[16px] text-[#F0F0F0]">
                India’s Go-To for Coupons, Offers & Cashback
              </p>
              <div className="social flex justify-evenly items-center gap-4">
                {socialMedia.map((social, index) => (
                  <img key={index} src={social.src} alt={social.alt} />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="w-[250px]">
              <div className="flex flex-col justify-center  gap-3">
                <div className="text-[20px] leading-[30px] text-[#F0F0F0] border-b-2 lg:border-b-0 lg:border-l-4 py-2 px-4 font-medium">
                  {section.title}
                </div>
                <ul className=" flex flex-col gap-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="px-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="row2 w-full flex flex-wrap gap-2 justify-between footerWidth:justify-center items-center mt-12">
          {/* Blog 1 */}
          <div className="w-full md:w-[520px]">
            <div className="text-[20px] leading-[30px] text-[#F0F0F0] md:border-l-4 py-2 px-4 font-medium">
              Latest From The Blog
            </div>
            <div className="flex flex-wrap gap-4 justify-between items-center p-4 bg-[#004805] rounded-[8px] mt-4">
              <div className="flex-shrink-0">
                <img
                  src={footerImage}
                  alt="Footer Image"
                  className="w-full max-w-[100px] md:max-w-[120px] rounded-md"
                />
              </div>
              <div className="flex-1">
                <p className="leading-[28px] text-[16px] text-[#F0F0F0] font-normal">
                  Easter Monday Shopping on a Budget: Top Tips for Scoring Great
                  Discounts
                </p>
                <p className="font-normal text-right text-[20px] leading-[28px] mt-3">
                  By Preksha Malavia
                </p>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="w-full md:w-[520px]">
            <div className="text-[20px] leading-[30px] text-[#F0F0F0] md:border-l-4 py-2 px-4 font-medium">
              We are Hiring
            </div>
            <div className="flex flex-col justify-between items-start p-4 bg-[#004805] rounded-[8px] mt-4">
              <p className="leading-[28px] text-[16px] text-[#F0F0F0] font-normal">
                Seeking deal-driven superheroes! Join the discount hunters at
                CouponDunia and embark on an epic mission to save wallets and
                conquer the world of savings. Ready to seize the deal?
              </p>
              <p className=" w-full font-normal flex justify-end cursor-pointer items-center gap-3 text-right text-[20px] leading-[28px] mt-3">
                See All Jobs
                <img src={iconRightarrow} alt=">" className="w-4 h-4" />
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 w-full">
          {" "}
          2024 Bennett, Coleman & Co. Ltd. All rights reserved. | Indiatimes
          Commerce Network
        </div>
      </div>
    </div>
  );
};

export default Footer;

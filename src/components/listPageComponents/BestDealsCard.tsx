import React, { useState, useMemo } from "react";
import amazon from "../../assets/amazon.png";
import zikomarke from "../../assets/zikomarke.png";
import spotify from "../../assets/spotify.png";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

// Define the type for card items
interface CardData {
  id: number;
  imgsrc: string;
  type: "online" | "offline";
  discount: string;
  btnTitle: string;
}

// Card data array
const cards: CardData[] = [
  {
    id: 0,
    imgsrc: amazon,
    type: "online",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 1,
    imgsrc: zikomarke,
    type: "offline",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 2,
    imgsrc: spotify,
    type: "online",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 3,
    imgsrc: amazon,
    type: "online",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 4,
    imgsrc: zikomarke,
    type: "offline",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 5,
    imgsrc: spotify,
    type: "online",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 6,
    imgsrc: amazon,
    type: "online",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 7,
    imgsrc: zikomarke,
    type: "offline",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
  {
    id: 8,
    imgsrc: spotify,
    type: "online",
    discount: "Upto 82% OFF",
    btnTitle: "DETAILS",
  },
];

// Component for a single card
const BestDealsCard: React.FC<CardData> = ({
  id,
  imgsrc,
  type,
  discount,
  btnTitle,
}) => {
  const navigate = useNavigate();
  const goToPage = () => {
    console.log(id);
    if (type === "offline")
      navigate(`/offline-products/${id}`);
    else
      navigate(`/online-products/${id}`);
  };
  return (
    <div className="flex flex-col items-center bg-white shadow-custom rounded-[20px] gap-5 w-full max-w-[349px] p-5">
      <div>
        <img
          src={imgsrc}
          alt="Best Deal"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="font-poppins font-semibold leading-[54px] text-[18px] md:text-[26px] xl:text-[36px] text-[#888888]">
        {discount}
      </div>

      <button
        className="bg-[#68FFA5] w-[80%] rounded-[15px] py-3 font-poppins font-semibold leading-[20px] text-[20px]"
        onClick={goToPage}
      >
        {btnTitle}
      </button>
    </div>
  );
};

// Main component to display all cards
const BestDeals: React.FC = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 jobs per page

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top smoothly when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate paginated jobs
  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return cards.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  return (
    <div>
      <div className="grid justify-items-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-12 bg-[#BFFFD9]">
        {paginatedJobs.map((card) => (
          <BestDealsCard
            key={card.id}
            id={card.id}
            type={card.type}
            imgsrc={card.imgsrc}
            discount={card.discount}
            btnTitle={card.btnTitle}
          />
        ))}
      </div>
      <div className="flex justify-end px-14 py-8 w-full mx-auto max-w-screen-2xl">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BestDeals;

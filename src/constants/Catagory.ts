import movieicon from "../assets/movieicon.png";
import fashionicon from "../assets/fashionicon.png";
import travelicon from "../assets/travelicon.png";
import electronicsicon from "../assets/electronicsicon.png";
import electronicsicon2 from "../assets/electronicsicon2.png";
import MONDOframe from "../assets/MONDOfarm.png";

interface Tab {
  id: number;
  name: string;
  icon: string;
  content: CardData[];
  stores: string;
  storeContent: StoreCard[];
}

interface CardData {
  imgsrc: string;
  description: string;
  discount: string;
  buttonLabel: string;
}
interface StoreCard {
  companyLogoSrc: string;
  storeDescription: string;
}

export const tabs: Tab[] = [
  {
    id: 1,
    name: "Movies",
    icon: movieicon,
    content: [
      {
        imgsrc: MONDOframe,
        description: "80% Off on Plants",
        discount: "Logo Upto 15%",
        buttonLabel: "Get Deal",
      },
      {
        imgsrc: MONDOframe,
        description: "80% Off on Plants",
        discount: "Logo Upto 10%",
        buttonLabel: "Get Deal",
      },
      {
        imgsrc: MONDOframe,
        description: "80% Off on Plants",
        discount: "Logo Upto 8%",
        buttonLabel: "Get Deal",
      },
      {
        imgsrc: MONDOframe,
        description: "80% Off on Plants",
        discount: "Logo Upto 8%",
        buttonLabel: "Get Deal",
      },
      {
        imgsrc: MONDOframe,
        description: "80% Off on Plants",
        discount: "Logo Upto 8%",
        buttonLabel: "Get Deal",
      },
    ],
    stores: "Stores",
    storeContent: [
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
    ],
  },
  {
    id: 2,
    name: "Fashion",
    icon: fashionicon,
    content: [
      {
        imgsrc: MONDOframe,
        description: "70% Off on Clothes",
        discount: "Logo Upto 20%",
        buttonLabel: "Grab Now",
      },
      {
        imgsrc: MONDOframe,
        description: "Buy 1 Get 1 Free",
        discount: "Exclusive Offer",
        buttonLabel: "Shop Now",
      },
    ],
    stores: "Stores",
    storeContent: [
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
    ],
  },
  {
    id: 3,
    name: "Travel",
    icon: travelicon,
    content: [
      {
        imgsrc: MONDOframe,
        description: "50% Off on Flights",
        discount: "Summer Special",
        buttonLabel: "Book Now",
      },
      {
        imgsrc: MONDOframe,
        description: "Holiday Packages",
        discount: "Upto 30% Off",
        buttonLabel: "Explore",
      },
    ],
    stores: "Stores",
    storeContent: [
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
    ],
  },
  {
    id: 4,
    name: "Electronics",
    icon: electronicsicon,
    content: [
      {
        imgsrc: MONDOframe,
        description: "50% Off on Flights",
        discount: "Summer Special",
        buttonLabel: "Book Now",
      },
      {
        imgsrc: MONDOframe,
        description: "Holiday Packages",
        discount: "Upto 30% Off",
        buttonLabel: "Explore",
      },
    ],
    stores: "Stores",
    storeContent: [
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
    ],
  },
  {
    id: 5,
    name: "Electronics",
    icon: electronicsicon2,
    content: [
      {
        imgsrc: MONDOframe,
        description: "50% Off on Flights",
        discount: "Summer Special",
        buttonLabel: "Book Now",
      },
      {
        imgsrc: MONDOframe,
        description: "Holiday Packages",
        discount: "Upto 30% Off",
        buttonLabel: "Explore",
      },
    ],
    stores: "Stores",
    storeContent: [
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
    ],
  },
  {
    id: 6,
    name: "Electronics",
    icon: electronicsicon2,
    content: [
      {
        imgsrc: MONDOframe,
        description: "50% Off on Flights",
        discount: "Summer Special",
        buttonLabel: "Book Now",
      },
      {
        imgsrc: MONDOframe,
        description: "Holiday Packages",
        discount: "Upto 30% Off",
        buttonLabel: "Explore",
      },
      {
        imgsrc: MONDOframe,
        description: "Holiday Packages",
        discount: "Upto 30% Off",
        buttonLabel: "Explore",
      },
      {
        imgsrc: MONDOframe,
        description: "Holiday Packages",
        discount: "Upto 30% Off",
        buttonLabel: "Explore",
      },
      {
        imgsrc: MONDOframe,
        description: "Holiday Packages",
        discount: "Upto 30% Off",
        buttonLabel: "Explore",
      },
    ],
    stores: "Stores",
    storeContent: [
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
      {
        companyLogoSrc: MONDOframe,
        storeDescription: "80% Off on Plants",
      },
    ],
  },
];

import React from "react";

type SectionHeadingProps = {
  heading: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
  return (
    <div>
      <div className="font-['Poppins'] text-lg font-bold leading-[40px] text-left decoration-[underline-from-font] decoration-skip-ink-none text-[#404040] w-max block mb-8">
        {heading}
        <br />
        <span className="w-full block h-1 bg-[#248D50]"></span>
      </div>
    </div>
  );
};

export default SectionHeading;

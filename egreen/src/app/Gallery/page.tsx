import React from "react";
import Image from "next/image";
import gallery_3 from "../../assets/pictures/gallery_3.jpg";
import gallery_2 from "../../assets/pictures/gallery_2.jpg";
import gallery_1 from "../../assets/pictures/gallery_1.jpg";
import gallery_4 from "../../assets/pictures/gallery_4.jpg";

function GalleryPage() {
  return (
    <div className="bg-[#707356]">
      <div className="flex flex-col gap-6 p-10">
        <h1 className="text-[#FFD186] font-Roger-main text-5xl">
          Image Gallery
        </h1>
        <span className="font-Manrope-medium">
          Browse through our stunning collection of property images.
        </span>

        <div className="grid grid-cols-2 gap-6 grid-row-2">
          <Image className="object-contain rounded-3xl" src={gallery_3} alt={`${gallery_3} names`} />
          <Image className="object-contain rounded-3xl" src={gallery_2} alt={`${gallery_2} names`} />
          <Image className="object-contain rounded-3xl" src={gallery_1} alt={`${gallery_1} names`} />
          <Image className="object-contain rounded-3xl" src={gallery_4} alt={`${gallery_4} names`} />
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;

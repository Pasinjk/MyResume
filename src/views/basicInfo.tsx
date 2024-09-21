import React from "react";
import Image from "next/image";

const BasicInfo = () => {
  return (
    <div className="flex-row">
      <Image src="" alt="" />
      <div className="flex-col">
        <div className="text-5xl font-bold">Pasin Jankham</div>
        <span>Phone Number : 0982830228</span>
      </div>
    </div>
  );
};

export default BasicInfo;

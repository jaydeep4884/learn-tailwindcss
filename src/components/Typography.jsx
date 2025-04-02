import React from "react";

function Typography() {
  return (
    <div>
      {/* FONT FAMILY  */}
      {/* <div>
        <p className="font-serif">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ipsum
          explicabo, cupiditate sed!
        </p>
        <p className="font-mono">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ipsum
          explicabo, cupiditate sed!
        </p>
        <p className="font-sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ipsum
          explicabo, cupiditate sed!
        </p>
      </div> */}

      {/* Font-Properties : Size, color, style, Weight  */}
      <p className="text-sm">Font Size 14px !</p>
      <p className="text-md">Font Size 16px !</p>
      <p className="text-xl">Font Size 20px !</p>
      <p className="text-2xl">Font Size 24px !</p>
      <p className="text-3xl">Font Size 30px !</p>
      <p className="text-[35px] italic ">Font Italic and 35px !</p>
      <p className="text-[40px] font-black ">Font Weight 900 !</p>
      <p className="text-[45px] font-sans text-center ">Text Align-Center !</p>
      <p className="text-[50px] text-purple-100 hover:underline md:text-purple-950">
        Font Color Change !
      </p>
    </div>
  );
}

export default Typography;

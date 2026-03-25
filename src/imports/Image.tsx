import imgImage from "figma:asset/9cbe27c1e3bdc3bad8ab6855cc6d9a4878132c78.png";

function Tag() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="tag">
      <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4d523c] text-[12px] tracking-[0.24px] whitespace-nowrap">Best Seller</p>
    </div>
  );
}

function TagContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="tag container">
      <Tag />
    </div>
  );
}

export default function Image() {
  return (
    <div className="content-stretch flex flex-col items-start px-[13px] py-[12px] relative rounded-[10px] size-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-[143.99%] left-[-2.71%] max-w-none top-[-18.29%] w-[105.43%]" src={imgImage} />
      </div>
      <TagContainer />
    </div>
  );
}
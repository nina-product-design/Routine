import imgImage12 from "figma:asset/9a0f1af7fa14dd4e72ad9cd85a2b569e25329f2c.png";

function GiftInfo() {
  return (
    <div className="bg-[#e2d9c2] h-[27px] relative shrink-0 w-full" data-name="Gift Info">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[216px] py-[9px] relative size-full">
          <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161716] text-[0px] text-[12px] text-center tracking-[0.96px] uppercase whitespace-nowrap">
            <span className="leading-[1.2]">{`Subscribe to `}</span>
            <span className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2]">1 more item</span>
            <span className="leading-[1.2]">{` to unlock`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Simplon_Norm:Regular',sans-serif] items-start leading-[1.5] min-h-px min-w-px not-italic relative text-[#6c6c6c]">
      <p className="relative shrink-0 text-[14px] tracking-[0.28px] w-full">Free Toiletry Bag</p>
      <p className="relative shrink-0 text-[12px] tracking-[0.24px] w-full">Your travel-friendly toiletry bag — in 100% recycled cotton canvas ($30 value).</p>
    </div>
  );
}

function FreeGift() {
  return (
    <div className="relative shrink-0 w-full" data-name="free gift">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[56px]" data-name="image 12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[111.54%] left-[-0.19%] max-w-none top-[-3.85%] w-[100.38%]" src={imgImage12} />
            </div>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function Gwp() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[8px] pt-[16px] px-[24px] relative size-full" data-name="GWP">
      <div className="bg-[#f9f7f2] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="GWP">
        <GiftInfo />
        <FreeGift />
      </div>
    </div>
  );
}
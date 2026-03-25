function GiftInfo() {
  return (
    <div className="bg-[#ecff92] h-[27px] relative shrink-0 w-full" data-name="Gift Info">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[216px] py-[9px] relative size-full">
          <p className="font-['Simplon_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161716] text-[0px] text-[12px] text-center tracking-[0.96px] uppercase whitespace-nowrap">
            <span className="leading-[1.2]">We’ve</span>
            <span className="font-['Simplon_Mono:Medium',sans-serif] leading-[1.2]">{` added your free gift`}</span>
            <span className="leading-[1.2]">{` to cart!`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Gwp1() {
  return (
    <div className="bg-[#f6ffcd] content-stretch flex flex-col items-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="GWP">
      <GiftInfo />
    </div>
  );
}

export default function Gwp() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[8px] pt-[16px] px-[24px] relative size-full" data-name="GWP">
      <Gwp1 />
    </div>
  );
}
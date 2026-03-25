function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-[279px]">Every 4 weeks [recommended]</p>
    </div>
  );
}

function Highlight() {
  return (
    <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px]" data-name="highlight">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">14.00</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">35.00</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] not-italic relative shrink-0 text-right whitespace-nowrap" data-name="price">
      <Highlight />
      <Frame />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-[279px]">{`Every 8 weeks `}</p>
    </div>
  );
}

function Highlight1() {
  return (
    <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px]" data-name="highlight">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">14.00</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">35.00</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] not-italic relative shrink-0 text-right whitespace-nowrap" data-name="price">
      <Highlight1 />
      <Frame1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-[279px]">Every 12 weeks</p>
    </div>
  );
}

function Highlight2() {
  return (
    <div className="bg-[#ecff92] content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px]" data-name="highlight">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">14.00</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Regular',sans-serif] items-center justify-center line-through px-[4px] relative shrink-0 text-[#6c6c6c] text-[10px] tracking-[0.2px]">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">$</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">35.00</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end leading-[1.5] not-italic relative shrink-0 text-right whitespace-nowrap" data-name="price">
      <Highlight2 />
      <Frame2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Simplon_Norm:Regular',sans-serif] h-[18px] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[12px] tracking-[0.24px] w-[279px]">Buy Once</p>
    </div>
  );
}

function Highlight3() {
  return (
    <div className="content-stretch flex font-['Simplon_Norm:Medium',sans-serif] items-center justify-center leading-[1.5] not-italic px-[4px] relative rounded-[4px] shrink-0 text-[#161716] text-[14px] text-right whitespace-nowrap" data-name="highlight">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">34.00</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="price">
      <Highlight3 />
    </div>
  );
}

export default function DropdownList() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative size-full" data-name="Dropdown list">
      <div className="bg-white content-stretch flex items-center mb-[-1px] px-[12px] py-[16px] relative shrink-0 w-[295px]" data-name="Dropdown row">
        <div aria-hidden="true" className="absolute border-[#e2d9c2] border-l border-r border-solid border-t inset-0 pointer-events-none" />
        <Text />
        <Price />
      </div>
      <div className="bg-white content-stretch flex items-center mb-[-1px] px-[12px] py-[16px] relative shrink-0 w-[295px]" data-name="Dropdown row">
        <div aria-hidden="true" className="absolute border-[#e2d9c2] border-l border-r border-solid border-t inset-0 pointer-events-none" />
        <Text1 />
        <Price1 />
      </div>
      <div className="bg-white content-stretch flex items-center mb-[-1px] px-[12px] py-[16px] relative shrink-0 w-[295px]" data-name="Dropdown row">
        <div aria-hidden="true" className="absolute border-[#e2d9c2] border-l border-r border-solid border-t inset-0 pointer-events-none" />
        <Text2 />
        <Price2 />
      </div>
      <div className="bg-white content-stretch flex items-center mb-[-1px] px-[12px] py-[16px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-[295px]" data-name="Dropdown row">
        <div aria-hidden="true" className="absolute border border-[#e2d9c2] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
        <Text3 />
        <Price3 />
      </div>
    </div>
  );
}
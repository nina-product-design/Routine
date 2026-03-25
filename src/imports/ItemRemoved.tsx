type ItemRemovedProps = {
  className?: string;
  showUndo?: boolean;
  text?: string;
};

export default function ItemRemoved({ className, showUndo = false, text = "You deleted Alexandria’s Shampoo" }: ItemRemovedProps) {
  return (
    <div className={className || "bg-[#f9f7f2] content-stretch flex flex-col h-[174px] items-center justify-center px-[24px] relative w-[375px]"} data-name="item removed">
      <div className="content-stretch flex flex-col gap-[4px] items-end py-[24px] relative shrink-0 w-full" data-name="Product">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
          <p className="font-['Simplon_Norm:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323429] text-[16px] text-center tracking-[0.32px] w-full">{text}</p>
        </div>
        {showUndo && (
          <div className="h-[21px] relative shrink-0 w-[327px]" data-name="CTA">
            <p className="absolute decoration-solid font-['Simplon_Norm:Regular',sans-serif] inset-0 leading-[1.5] not-italic text-[#323429] text-[14px] text-center tracking-[0.28px] underline">Undo</p>
          </div>
        )}
      </div>
    </div>
  );
}
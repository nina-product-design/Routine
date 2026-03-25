import imgProseDryShampooFront from "figma:asset/cabefff756088b583173834b7e929f5abf194c57.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-0 w-[67px]" data-name="Prose-dry-shampoo-front">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.08%] left-[-14.54%] max-w-none top-[-0.18%] w-[130.37%]" src={imgProseDryShampooFront} />
        </div>
      </div>
    </div>
  );
}
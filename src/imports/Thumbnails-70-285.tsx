import imgProseCandlePreludeFrontBackground from "figma:asset/2e6f92bc67cecc4d32b629dbf315d25d94505ca2.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-[0_-5.1%_-5.38%_0]" data-name="Prose-Candle-Prelude-Front-Background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.55%] left-[-22.68%] max-w-none top-[-17.13%] w-[145.36%]" src={imgProseCandlePreludeFrontBackground} />
        </div>
      </div>
    </div>
  );
}
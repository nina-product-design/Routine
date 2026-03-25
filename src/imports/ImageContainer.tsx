import imgImage from "figma:asset/670732c8ba23d179ffcd97ca29f12c58870cba1c.png";

function Image() {
  return (
    <div className="h-[511.734px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <div className="size-full" />
    </div>
  );
}

export default function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[-25.57px] pr-[-330.453px] pt-[-211.406px] relative size-full" data-name="image container">
      <Image />
    </div>
  );
}
import imgImageProseCustomersWithTheirCustomShampoo from "figma:asset/52fd239fd0d052c4a2b6ef88eee1fdbb172e8c50.png";

function ImageProseCustomersWithTheirCustomShampoo() {
  return (
    <div className="h-[381px] relative rounded-[10px] shrink-0 w-full" data-name="Image (Prose customers with their custom shampoo)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageProseCustomersWithTheirCustomShampoo} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[381px] items-start left-[27.5px] overflow-clip rounded-[10px] top-0 w-[305px]" data-name="Container">
      <ImageProseCustomersWithTheirCustomShampoo />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}
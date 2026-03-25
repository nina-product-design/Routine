import imgImageWomanWashingHairWithShampoo from "figma:asset/e1e4b6e0319b64fd18e64f089041fbd4466397cb.png";

function ImageWomanWashingHairWithShampoo() {
  return (
    <div className="h-[381px] relative rounded-[10px] shrink-0 w-full" data-name="Image (Woman washing hair with shampoo)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageWomanWashingHairWithShampoo} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[381px] items-start left-[27.5px] overflow-clip rounded-[10px] top-0 w-[305px]" data-name="Container">
      <ImageWomanWashingHairWithShampoo />
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
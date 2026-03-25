import imgImageShampooPouringFromBottle from "figma:asset/7bdf181b500b5d25f75bce0412317a767b09f343.png";

function ImageShampooPouringFromBottle() {
  return (
    <div className="h-[381px] relative rounded-[10px] shrink-0 w-full" data-name="Image (Shampoo pouring from bottle)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageShampooPouringFromBottle} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[381px] items-start left-[27.5px] overflow-clip rounded-[10px] top-0 w-[305px]" data-name="Container">
      <ImageShampooPouringFromBottle />
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
import imgImageProseCustomShampooWithBubbles from "figma:asset/8d72585e1723fae84bef6f3be35dd544e8f1ac77.png";

function ImageProseCustomShampooWithBubbles() {
  return (
    <div className="h-[381px] relative rounded-[10px] shrink-0 w-full" data-name="Image (Prose Custom Shampoo with bubbles)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageProseCustomShampooWithBubbles} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[381px] items-start left-[27.5px] overflow-clip rounded-[10px] top-0 w-[305px]" data-name="Container">
      <ImageProseCustomShampooWithBubbles />
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
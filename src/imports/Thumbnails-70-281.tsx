import imgThumbnails from "figma:asset/d335be5b9f38204d6a723fd37cbe3f669eb18b13.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[136.16%] left-[-24.93%] max-w-none top-[-15.22%] w-[151.87%]" src={imgThumbnails} />
      </div>
    </div>
  );
}
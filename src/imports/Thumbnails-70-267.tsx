import imgThumbnails from "figma:asset/2db70629a33b827aea7e162f4649e3319dd3c899.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[122.54%] left-[-18.56%] max-w-none top-[-11.51%] w-[136.08%]" src={imgThumbnails} />
      </div>
    </div>
  );
}
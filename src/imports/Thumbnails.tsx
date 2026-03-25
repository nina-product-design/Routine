import imgThumbnails from "figma:asset/5d630ba1673a424b863cec5709fad96c1b8ca39f.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[137.2%] left-[-24.05%] max-w-none top-[-15.04%] w-[149.94%]" src={imgThumbnails} />
      </div>
    </div>
  );
}
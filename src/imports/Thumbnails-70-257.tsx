import imgThumbnails from "figma:asset/994253fd7e598bdbee42294461bb591e6ad6a94f.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[119.43%] left-[-18.37%] max-w-none top-[-1.36%] w-[133.69%]" src={imgThumbnails} />
      </div>
    </div>
  );
}
import imgThumbnails from "figma:asset/fcddb13bffc6b1dc78773f3bf1ed1eb7c473c821.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[136.16%] left-[-25.19%] max-w-none top-[-18.94%] w-[151.87%]" src={imgThumbnails} />
      </div>
    </div>
  );
}
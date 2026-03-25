import imgThumbnails from "figma:asset/bea50f72db553a88f118e639735d92254f417982.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.1%] max-w-none top-[14.71%] w-[111.05%]" src={imgThumbnails} />
      </div>
    </div>
  );
}
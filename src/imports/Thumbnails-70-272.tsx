import imgThumbnails from "figma:asset/be516515f12a38475186feceb608b91fff23889a.png";

export default function Thumbnails() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Thumbnails">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[116.61%] left-[-16.45%] max-w-none top-[-15.96%] w-[129.49%]" src={imgThumbnails} />
      </div>
    </div>
  );
}
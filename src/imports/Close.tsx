import svgPaths from "./svg-5snxbdkyis";

function Group() {
  return (
    <div className="absolute inset-[0_0.17%_0.17%_0]" data-name="Group">
      <div className="absolute inset-[-5.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3935 13.3934">
          <g id="Group">
            <path d={svgPaths.pbfcab60} id="Line 4" stroke="var(--stroke-0, #323429)" strokeLinecap="square" />
            <path d={svgPaths.p39b19100} id="Line 4_2" stroke="var(--stroke-0, #323429)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CloseButton() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Close button">
      <Group />
    </div>
  );
}

export default function Close() {
  return (
    <div className="relative size-full" data-name="close">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" data-figma-bg-blur-radius="4" fill="var(--fill-0, white)" id="Ellipse 287" opacity="0.5" r="16" />
        <defs>
          <clipPath id="bgblur_0_53_234_clip_path" transform="translate(4 4)">
            <circle cx="16" cy="16" r="16" />
          </clipPath>
        </defs>
      </svg>
      <CloseButton />
    </div>
  );
}
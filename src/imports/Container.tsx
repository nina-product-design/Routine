import svgPaths from "./svg-krbo4a6j75";
import { imgVector } from "./svg-vq7mo";

function Group1() {
  return (
    <div className="absolute contents inset-[24.79%_33.86%_28.67%_33.85%]" data-name="Group">
      <div className="absolute inset-[40.57%_33.86%_28.67%_33.85%]" data-name="Vector">
        <div className="absolute inset-[-4.06%_-3.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4346 9.9785">
            <path d={svgPaths.pe318200} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.79%_44.8%_59.56%_42.59%]" data-name="Vector">
        <div className="absolute inset-[-7.99%_-9.91%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1577 5.0707">
            <path d={svgPaths.pcb43780} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[22.59%_56.53%_65.67%_25.65%]" data-name="Mask group">
      <div className="absolute inset-[20.09%_51.43%_63.17%_23.15%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.75px_0.75px] mask-size-[5.345px_3.521px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.62509 5.02146">
          <path d={svgPaths.p2f86e000} fill="var(--fill-0, #6C6C6C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[22.59%_56.53%_65.67%_25.65%]" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.25%]" data-name="Group">
      <div className="absolute inset-[1.25%]" data-name="Vector">
        <div className="absolute inset-[-1.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <path d={svgPaths.p38276000} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[15.15%_13.64%_15.15%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-1.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4394 21.4394">
            <path d={svgPaths.peb36e60} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <Group1 />
      <Group2 />
      <div className="absolute inset-[24.78%_39.12%_73.05%_56.97%]" data-name="Vector">
        <div className="absolute inset-[-50.26%_-15.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.53814 1.30779">
            <path d={svgPaths.p34ce5d00} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.86%_39.13%_66.97%_56.96%]" data-name="Vector">
        <div className="absolute inset-[-50.26%_-15.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.53814 1.3078">
            <path d={svgPaths.p18ed9000} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.83%_38.67%_71.08%_56.99%]" data-name="Vector">
        <div className="absolute inset-[-1432.14%_-0.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.31935 0.776028">
            <path d={svgPaths.p245c1a00} id="Vector" stroke="var(--stroke-0, #6C6C6C)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center px-[5px] relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}
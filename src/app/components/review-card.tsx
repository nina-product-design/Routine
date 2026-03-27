import svgPaths from "../../imports/svg-4kjasif1ts";

export interface ReviewData {
  name: string;
  location?: string;
  date: string;
  rating: number;
  body: string;
}

interface ReviewCardProps {
  review: ReviewData;
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className="h-[14px] w-auto"
      fill="none"
      viewBox="0 0 14.6685 13.9506"
    >
      <path
        clipRule="evenodd"
        d={svgPaths.p20128100}
        fill={filled ? "#4D523C" : "#E0DDD6"}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white flex flex-col gap-[16px] p-[16px] rounded-[10px] border border-[#f1ece0] min-w-[270px] w-[270px] shrink-0">
      {/* Name, Location, Date & Stars */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-col font-['Simplon Norm','Inter',sans-serif] text-[#4d523c] text-[12px] leading-[1.5] tracking-[0.24px]">
          <p>{review.name}</p>
          {review.location && <p>{review.location}</p>}
          <p>{review.date}</p>
        </div>
        <div className="flex gap-[3px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} filled={i < review.rating} />
          ))}
        </div>
      </div>

      {/* Body */}
      <p className="font-['Simplon Norm','Inter',sans-serif] text-[14px] leading-[1.5] tracking-[0.28px] text-[#4d523c]">
        {review.body}
      </p>
    </div>
  );
}

interface NavProps {
  state?: string;
}

export default function Nav({ state = "NAV_DEFAULT" }: NavProps) {
  return (
    <div className="w-full h-12 border-b-2 border-b-third/30">
      <div className="w-[1200px] max-w-[1200px] mx-auto h-full flex justify-between items-center">
        <span className="font-bold text-lg text-primary">YoHa's Portfolio</span>
        <span className="font-semibold text-primary">
          저를 보러 와주셔서 고마워요!!!
        </span>
      </div>
    </div>
  );
}

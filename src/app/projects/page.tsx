import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div className="w-[900px] min-h-[800px] bg-white shadow-figma rounded-2xl px-7 pt-7">
      <div className="font-bold text-2xl text-primary border-b-2 border-b-third/30 pb-3">
        Projects
      </div>
    </div>
  );
}

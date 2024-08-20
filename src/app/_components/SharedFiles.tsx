import { ChevronsRight, Image, Settings, User } from "lucide-react";
import AddButton from "./AddButton";
import { ReactNode } from "react";

export default function SharedFiles() {
  return (
    <div className="w-[15%] rounded-lg border border-violet-500 border-opacity-50">
      <SharedFilesMain />
    </div>
  );
}

export function SharedFilesHeader() {
  return (
    <div className="flex flex-col gap-4 bg-[#20222c] p-6">
      <div className="flex flex-col items-center gap-4">
        <div>
          <ChevronsRight size={32} />
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-500">
          <User size={56} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <AddButton />
        <button className="w-15 rounded-full border border-slate-400 border-opacity-50 bg-[#373947] p-4 text-[#878a99] hover:bg-opacity-50">
          <Settings />
        </button>
      </div>
    </div>
  );
}

export function SharedFilesMain() {
  return <div className="flex w-full justify-center gap-4 text-lg border-b border-violet-500 border-opacity-50">
    <Button text="Gallery" />
    <Button text="GIFs" />
    <Button text="Emojies" />
    <Button text="Stickers" />
  </div>;
}

function Button({
  text,
  classNameStyle,
}: {
  text: string;
  classNameStyle?: string | null;
}) {
  return (
    <button
      className={`{${classNameStyle ? classNameStyle : "w-full p-1 text-[#878a99] hover:bg-opacity-50"}} `}
    >
      {text}
    </button>
  );
}

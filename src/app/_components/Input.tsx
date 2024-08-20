"use client"
import { Mic, Paperclip, Search, Smile } from "lucide-react";
import { useRef } from "react";

export default function Input() {
    const ref = useRef<HTMLInputElement | null>(null)
  return (
    <div onClick={() => ref.current?.focus()} className="bg-[#23242a] rounded-full flex gap-2 items-center p-4 cursor-pointer">
        <Search color="rgb(203 213 225)" />
      <input
      ref={ref}
        type="text"
        placeholder="Search user or chat"
        className="w-full  outline-none bg-transparent"
      />
    </div>
  );
}


export function ChatInput () {
  return <div className="p-4 flex justify-between items-center bg-black rounded-lg bg-opacity-50">
    <input placeholder="Type a message here..." type="text" className="w-full p-4 text-lg outline-none bg-transparent" />
    <div className="flex gap-2 text-slate-200 px-4">
      <Smile size={30} />
      <Mic size={30} />
      <Paperclip size={30} />
    </div>
  </div>
}

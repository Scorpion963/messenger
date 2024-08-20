import { Ellipsis, Phone, Plus, X } from "lucide-react";

export default function AddButton() {
  return (
    <button className="rounded-full bg-blue-600 bg-opacity-20 p-4 border border-blue-500 border-opacity-50 text-blue-500 hover:bg-opacity-50">
      <Plus />
    </button>
  );
}

export function CallButton() {
  return (
    <button className="rounded-full border border-green-500 bg-green-600 bg-opacity-20 p-4 text-green-500 hover:bg-opacity-10">
      <Phone />
    </button>
  );
}

export function DeleteButton() {
  return (
    <button className="w-15 rounded-full border border-slate-400 border-opacity-50 bg-[#373947] p-4 text-[#878a99] hover:bg-opacity-50">
      <X />
    </button>
  );
}

export function MoreButton() {
  return (
    <button className="w-15 rounded-full border border-slate-400 border-opacity-50 bg-[#373947] p-4 text-[#878a99] hover:bg-opacity-50">
      <Ellipsis />
    </button>
  );
}


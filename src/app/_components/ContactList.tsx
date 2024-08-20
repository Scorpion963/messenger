import Contact, { ContactIcon, PeopleYouMayKnow } from "./Contact";

export default function Contactlist() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-lg text-slate-300">New</p>
          <div className="w-2 rounded-lg border border-red-500 bg-red-500 bg-opacity-50 p-1"></div>
        </div>
        <button className="rounded-xl bg-blue-600 bg-opacity-20 px-5 py-3 text-blue-500">
          9
        </button>
      </div>
      <div className="scrollbar flex max-h-[44vh] flex-col gap-6 overflow-auto pt-6">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export function PeopleYouMayKnowSection() {
  return (
    <div>
      <div className="bg-[#23242a] p-4 px-8 text-lg">People you may know</div>
      <div className="p-8">
        <div className="scrollbar flex max-h-[17vh] flex-col gap-6 overflow-auto">
          <PeopleYouMayKnow />
          <PeopleYouMayKnow />
          <PeopleYouMayKnow />
          <PeopleYouMayKnow />
          <PeopleYouMayKnow />
          <PeopleYouMayKnow />
        </div>
      </div>
    </div>
  );
}

import AddButton from "./AddButton";

export default function Contact() {
  return (
    <div className="flex items-start justify-between cursor-pointer">
      <div className="flex items-center gap-2">
        <ContactIcon />
        <div>
          <p className="text-lg text-slate-200">Nina Sulivan</p>
          <p className="text-sm text-slate-400">Ok, thanks</p>
        </div>
      </div>
      <div className="text-slate-400">14m</div>
    </div>
  );
}

export function ContactIcon() {
  return (
    <div className="relative h-14 w-14 rounded-full bg-white cursor-pointer">
      <div className="absolute left-10 top-11 w-[0.3rem] rounded-full border border-black bg-green-400 p-[0.3rem]"></div>
    </div>
  );
}

export function PeopleYouMayKnow() {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex gap-2 items-center">
        <ContactIcon />
        <div>jackson20062008@gmail.com</div>
      </div>
      <AddButton />
    </div>
  );
}

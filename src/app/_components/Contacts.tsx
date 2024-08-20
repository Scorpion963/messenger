import Contactlist, { PeopleYouMayKnowSection } from "./ContactList";
import Input from "./Input";
import Logo from "./Logo";

export default function Contacts() {
  return (
    <div className="w-1/4 rounded-lg border border-violet-500 border-opacity-50 bg-[#1b1c21]">
      <div className="p-8">
        <Logo />
        <div className="py-6 pt-8">
          <Input />
        </div>

        <Contactlist />
      </div>

      <PeopleYouMayKnowSection />
    </div>
  );
}

import Link from "next/link";
import Contacts from "./_components/Contacts";
import Chat from "./_components/Chat";
import SharedFiles from "./_components/SharedFiles";

export default function HomePage() {
  return (
    <main className="flex gap-12">
      <Contacts />
      <Chat />
      <SharedFiles />
    </main>
  );
}

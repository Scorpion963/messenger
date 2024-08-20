import AddButton, { CallButton, DeleteButton, MoreButton } from "./AddButton";
import { ContactIcon } from "./Contact";
import { ChatInput } from "./Input";

export default function Chat() {
  return (
    <div className="flex w-[60%] flex-col justify-between">
      <div>
        <ChatHeader />
        <div className="flex flex-col gap-8 overflow-auto scrollbar max-h-[80vh] py-6">
          <Message isMyMessage={true} />
          <Message isMyMessage={true} />
          <Message isMyMessage={false} />
          <Message isMyMessage={false} />
          <Message isMyMessage={false} />
          <Message isMyMessage={true} />
          <Message isMyMessage={false} />
          <Message isMyMessage={false} />
          <Message isMyMessage={true} />
          <Message isMyMessage={true} />
          <Message isMyMessage={false} />
          <Message isMyMessage={false} />
          <Message isMyMessage={false} />
          <Message isMyMessage={true} />
          <Message isMyMessage={false} />
          <Message isMyMessage={false} />
        </div>
      </div>
      <ChatInput />
    </div>
  );
}

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b border-violet-500 border-opacity-50 py-6">
      <div className="flex items-center gap-4">
        <div className="text-shadow-blue cursor-pointer text-xl text-blue-500">
          Members
        </div>
        <AddButton />
      </div>

      <h1 className="text-3xl">Group Name</h1>
      <div className="flex gap-4">
        <CallButton />
        <DeleteButton />
        <MoreButton />
      </div>
    </div>
  );
}

export function Message({ isMyMessage }: { isMyMessage: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 ${isMyMessage ? "justify-end text-white" : "justify-between text-[#b0b3c4]"}`}
    >
      <div
        className={`flex items-center gap-4 ${isMyMessage && "flex flex-row-reverse"}`}
      >
        <ContactIcon />
        <p
          className={`${isMyMessage ? "bg-blue-600" : "bg-[#2e303b]"} rounded-lg p-6`}
        >
          i was just curious where i could find the pricing of H&M Female
          Dresses
        </p>
      </div>
      <div className="text-[#b0b3c4]">9:19 PM</div>
    </div>
  );
}

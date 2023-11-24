import MessageCard from "@/app/components/molecules/MessageCard";
import TextForm from "@/app/components/molecules/TextForm";
import { Message } from "@/app/types/Message";
import { demoMessages } from "@/app/types/demo";

export default function MessageContainer() {
  const messages: Message[] = demoMessages;

  return (
    <>
      <ol className="space-y-2 pb-10">
        {messages.map((message) => (
          <li key={message.createdAt}>
            <MessageCard message={{ ...message }} />
          </li>
        ))}
      </ol>
      <footer className="sticky bottom-3">
        <TextForm />
      </footer>
    </>
  );
}

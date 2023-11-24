import { LiaUserCircle } from "react-icons/lia";

import { Message } from "@/app/types/Message";

export default function MessageCard({ message }: { message: Message }) {
  return (
    <div
      className={`flex p-5 rounded-lg ${
        message.self ? "bg-tertiary-50" : "bg-white"
      }`}
    >
      <div className="w-1/12">
        <LiaUserCircle className="w-12 h-12" />
      </div>
      <div className="w-11/12 space-y-2">
        <div className="flex items-center space-x-5">
          <h6 className="body-large">{message.user}</h6>
          <p className="body-small">{message.createdAt.toLocaleString()}</p>
        </div>
        <p className="body-medium break-words">{message.content}</p>
      </div>
    </div>
  );
}

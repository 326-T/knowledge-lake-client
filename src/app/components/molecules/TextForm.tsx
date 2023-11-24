import { LuSend } from "react-icons/lu";

export default function TextForm() {
  return (
    <form className=" mb-8">
      <div className="flex items-center justify-between p-3 space-x-3 rounded-lg bg-white">
        <textarea
          className="w-full p-2 break-words"
          placeholder="メッセージを入力"
        />
        <button>
          <LuSend className="w-12 h-12 p-2 rounded-lg bg-secondary-700 text-white" />
        </button>
      </div>
    </form>
  );
}

import { Book } from "@/app/types/Book";

export default function BookDetail({ book }: { book: Book }) {
  return (
    <div className="w-full h-full">
      <div className="w-full h-auto">
        <img
          src={book.imageUrl}
          alt="サムネ画像"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full pt-4 space-y-5">
        <h5 className="title-medium text-gray-700">{book.title}</h5>
        <div className="flex items-center space-x-1">
          <p className="body-large text-gray-700">
            信頼率：{book.reliability * 100}%
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="body-large text-gray-700">引用数：{book.likes}</p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="body-large text-gray-700">価格：{book.price}円</p>
        </div>
        <button className="form-icon">購入</button>
      </div>
    </div>
  );
}

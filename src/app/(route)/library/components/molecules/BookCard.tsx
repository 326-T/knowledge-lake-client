import { Book } from "@/app/types/Book";
import Image from "next/image";
import { LuSearchCheck } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { BsChatQuote } from "react-icons/bs";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="w-64 h-fit bg-white rounded-lg shadow-lg">
      <div className="w-full h-3/4">
        <Image
          src={book.imageUrl}
          alt="サムネ画像"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="w-full h-1/4 p-4 space-y-5">
        <h5 className="label-large text-gray-700 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {book.title}
        </h5>
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <LuSearchCheck className="text-gray-700" />
            <p className="label-large text-gray-700">
              {book.reliability * 100}%
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <BsChatQuote className="text-gray-700" />
            <p className="label-large text-gray-700">{book.likes}</p>
          </div>
          <div className="flex items-center space-x-1">
            <IoPricetagOutline className="text-gray-700" />
            <p className="label-large text-gray-700">{book.price}円</p>
          </div>
        </div>
      </div>
    </div>
  );
}

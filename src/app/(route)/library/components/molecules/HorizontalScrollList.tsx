import { Book } from "@/app/types/Book";
import BookCard from "./BookCard";

export default function HorizontalScrollList({
  bookList,
}: {
  bookList: Book[];
}) {
  return (
    <div className="overflow-x-scroll">
      <ul className="flex space-x-4">
        {bookList.map((book) => (
          <li className="flex-none w-fit h-fit bg-white" key={book.id}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

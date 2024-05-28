import { demoBookList } from "@/app/types/demo";
import HorizontalScrollList from "../molecules/HorizontalScrollList";
import { Book } from "@/app/types/Book";

export default function LibraryContainer() {
  const bookList: Book[] = demoBookList;

  return (
    <div className="block w-full p-4 space-y-4">
      <h5 className="label-large text-gray-700">購入済み</h5>
      <HorizontalScrollList bookList={demoBookList.slice(0, 10)} />
      <h5 className="label-large text-gray-700">おすすめ</h5>
      <HorizontalScrollList bookList={demoBookList.slice(10, 20)} />
      <h5 className="label-large text-gray-700">ランキング</h5>
      <HorizontalScrollList bookList={demoBookList.slice(20, 30)} />
    </div>
  );
}

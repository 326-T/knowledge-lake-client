import { demoBookList } from "@/app/types/demo";
import HorizontalScrollList from "../molecules/HorizontalScrollList";
import { Book } from "@/app/types/Book";

export default function LibraryContainer() {
  const bookList: Book[] = demoBookList;

  const formatDate = (date: string) => {
    const d = new Date(date);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  };

  return (
    <div className="block w-full p-4 space-y-4">
      <table className="table bg-white text-md">
        <thead>
          <tr>
            <th>写真</th>
            <th>本のタイトル</th>
            <th>価格</th>
            <th>評価</th>
            <th>お気に入り数</th>
            <th>更新日</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr key={book.id}>
              <td>
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-16 h-16"
                />
              </td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>{book.reliability}</td>
              <td>{book.likes}</td>
              <td>{formatDate(book.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

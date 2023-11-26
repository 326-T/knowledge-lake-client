import DashBoardLayout from "@/components/template/DashBoardLayout";
import HorizontalScrollList from "./components/molecules/HorizontalScrollList";
import LibraryContainer from "./components/organisms/LibraryContainer";

export default function TopPage() {
  return (
    <DashBoardLayout>
      <LibraryContainer />
    </DashBoardLayout>
  );
}

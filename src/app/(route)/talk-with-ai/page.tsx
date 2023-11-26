import DashBoardLayout from "@/components/template/DashBoardLayout";
import MessageContainer from "./components/organisms/MessageContainer";

export default function TopPage() {
  return (
    <DashBoardLayout>
      <div className="w-full h-full px-20">
        <MessageContainer />
      </div>
    </DashBoardLayout>
  );
}

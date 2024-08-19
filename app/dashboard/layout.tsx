import SideNav from "@/app/dashboard/_components/sideNav/sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col h-screen md:flex-row">
      {/* sideNav는 width 값을 주고 나머지는 grow로 채우기 */}
      <div className="w-full flex-none md:w-64 ">
        <SideNav />
      </div>
      <div className="bg-gray-200 grow md:p-5">{children}</div>
    </div>
  );
}

// import SidebarNavigation from "../ui/SidebarNav";
import SidebarNavigation from "../ui/SidebarNav";
import TopNavigation from "../ui/TopNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SidebarNavigation/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavigation />
        <main className=" overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

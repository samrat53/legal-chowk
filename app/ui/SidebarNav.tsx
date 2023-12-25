import Link from "next/link";

export default function SidebarNavigation() {
  return (
    
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </button>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Link
          key={1}
          href={"#"}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
        >
          <p className="hidden md:block">pppp</p>
        </Link>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form></form>
      </div>
    </div>
  );
}

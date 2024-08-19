"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { links } from "../../_lib/data";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-3 md:space-y-2">
      <div className="flex items-end justify-center h-20 text-white bg-primary rounded-md p-4 text-3xl md:h-40 ">
        Friend E.N.T
      </div>
      <div className="flex-grow rounded-md bg-white md:space-y-2 md:overflow-y-auto">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[60px] items-center justify-center border rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-4",
                {
                  "bg-sky-100 text-blue-600": pathname === link.href,
                }
              )}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
      <form className="flex h-[30px] md:h-[50px]"></form>
    </div>
  );
}

{
  /* <button
key={link.name}
onClick={()=>router.push(`${link.name}`)}
className={clsx(
  "flex h-[60px] items-center justify-center border rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-4",
  {
    "bg-sky-100 text-blue-600": pathname === link.href,
  }
)}
>
<p className="hidden md:block">{link.name}</p>
</button> */
}

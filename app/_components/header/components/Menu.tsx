import { menuList } from "../lib/data";

export default function Menu() {
  return (
    <div className="basis-8/12 text-center">
      <div className="font-semibold">
        {menuList.map((ele) => {
          return (
            <button className="relative px-10" key={ele.id}>
              <span className="relative hover:text-primary">{ele.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}


const NavLinkItem = ({ menu, index: i,active }) => {

  return (
    <div
      to={menu?.link}
      className={`group flex items-center text-base  gap-4 font-bold py-2 pl-1 rounded-md transition ease-in-out duration-100 hover:-translate-y-1 z-10 cursor-pointer `}
    >
      <h2
        style={{ transitionDelay: `${i + 3}00ms` }}
        className={`whitespace-pre duration-500 font-semibold ${active!==menu.link?'text-neutral-300':'text-black'}`}
      >
        {menu?.title}
      </h2>

    </div>
  );
};

export default NavLinkItem;

const NavbarItem = ({ title, href }) => {
  return (
    <a
      href={href}
      className="font-mono hover:text-slate-400 group relative no-underline text-slate-50"
    >
      {title}
      <span className="bg-cyan-400 absolute left-0 -bottom-1 w-0 h-1 transition-all group-hover:w-full"></span>
    </a>
  );
};

export default NavbarItem;
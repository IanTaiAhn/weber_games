import NavbarItem from "./NavbarItem";

const Navbar = () => {
  // TODO
  // transfer this over into React logic for responsive menu action!
  //   document.getElementById("menu").addEventListener("click", (e) => {
  //     e.target.nextElementSibling.classList.toggle("translate-x-full");
  //     e.target.nextElementSibling.classList.add("min-w-full");
  //     e.target.nextElementSibling.classList.add("ease-out");
  //   }
  //   );
  return (
    // <section className="bg-gradient-to-b from-slate-500 to-slate-400">
    <nav className="relative p-2 bg-gradient-to-b from-slate-500 to-slate-400">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* <!-- <img src="img/logo.svg" alt="" /> Perhaps I'll find a logo, or make one -->  */}
          <h1 className="font-bold text-3xl text-white p-2 rounded-full">
            {/* <a href="" className="hover:text-slate-400 group relative"> */}
            Weber Games
            {/* </a> */}
          </h1>
        </div>
        <div
          // I won't need this id anymore.
          id="menuItems"
          className="hidden space-x-6 text-white text-lg md:flex"
        >
          <NavbarItem title="Home" href="/HomePage" />
          <NavbarItem title="Menu" href="/Menu" />
          <NavbarItem title="Server" href="/Server" />
          <NavbarItem title="HangmanReact" href="/Hangman" />
          <NavbarItem title="Piggies!" href="/piggy_game/piggy.html" />
        </div>

        {/* <!-- Hamburger menu (responsive menu) --> */}
        <div className="relative m-2 md:hidden">
          {/* I'll need to figure out how to make this responsive using useEffect, or useState. */}
          <i className="fa-solid fa-bars fa-2x cursor-pointer" id="menu"></i>
          <div className="container flex justify-center fixed top-20 -left-full w-0 h-screen transition-all ease-in duration-400 bg-pink-400 z-10">
            <div className="flex flex-col pt-4 space-y-10 text-2xl text-white">
              <NavbarItem title="Home" href="/HomePage" />
              <NavbarItem title="Menu" href="/Menu" />
              <NavbarItem title="Server" href="/Server" />
              <NavbarItem title="HangmanReact" href="/Hangman" />
              <NavbarItem title="Piggies!" href="/piggy_game/piggy.html" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    // </section>
  );
};

export default Navbar;

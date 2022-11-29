import NavbarItem from "./NavbarItem";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // TODO
  // transfer this over into React logic for responsive menu action!
  //   document.getElementById("menu").addEventListener("click", (e) => {
  //     e.target.nextElementSibling.classList.toggle("translate-x-full");
  //     e.target.nextElementSibling.classList.add("min-w-full");
  //     e.target.nextElementSibling.classList.add("ease-out");
  //   }
  //   );
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();

    console.log("hello");
  };
  return (
    // <section className="bg-gradient-to-b from-slate-500 to-slate-400">
    <nav className="relative p-2 bg-gradient-to-b from-slate-500 to-slate-400">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* <!-- <img src="img/logo.svg" alt="" /> Perhaps I'll find a logo, or make one -->  */}
          <a
            href="/"
            className="font-bold text-3xl text-slate-50 p-2 no-underline cursor-pointer hover:text-slate-300"
          >
            {/* <a href="" className="hover:text-slate-400 group relative"> */}
            Weber Games
            {/* </a> */}
          </a>
        </div>
        <div className="hidden space-x-6 text-white text-lg md:flex">
          {/* <NavbarItem title="Home" href="/" /> */}
          <NavbarItem title="Menu" href="/Menu" />
          <NavbarItem title="Leaderboard" href="/Server" />
          {localStorage.length === 0 ? (
            <NavbarItem title="Login" href="/LoginPage" />
          ) : (
            <button
              className="hover:text-slate-400 group relative no-underline text-slate-50"
              onClick={logOut}
            >
              LogOut{" "}
              <span className="bg-yellow-300 absolute left-0 -bottom-1 w-0 h-1 transition-all group-hover:w-full"></span>
            </button>
          )}

          {/* <NavbarItem title="HangmanReact" href="/Hangman" />
          <NavbarItem title="Piggies!" href="/piggy_game/piggy.html" /> */}
        </div>

        {/* <!-- Hamburger menu (responsive menu) --> */}
        <div className="relative m-2 md:hidden">
          {/* I'll need to figure out how to make this responsive using useEffect, or useState. */}
          <i className="fa-solid fa-bars fa-2x cursor-pointer" id="menu"></i>
          <div className="container flex justify-center fixed top-20 -left-full w-0 h-screen transition-all ease-in duration-400 bg-pink-400 z-10">
            <div className="flex flex-col pt-4 space-y-10 text-2xl text-white">
              <NavbarItem title="Home" href="/" />
              <NavbarItem title="Menu" href="/Menu" />
              <NavbarItem title="Leaderboard" href="/Server" />
              <NavbarItem title="HangmanReact" href="/Hangman" />
              <NavbarItem title="Piggies!" href="/piggy_game/piggy.html" />
            </div>
          </div>
        </div>
        {/* Responsive menu end... */}
      </div>
    </nav>
    // </section>
  );
};

export default Navbar;

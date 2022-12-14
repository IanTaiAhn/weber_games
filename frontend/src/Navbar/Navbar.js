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
  };
  return (
    // <section className="bg-gradient-to-b from-slate-500 to-slate-400">
    <nav className="absolute top-0 w-full p-2 bg-gradient-to-b from-slate-600 to-slate-400 z-10">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* <!-- <img src="img/logo.svg" alt="" /> Perhaps I'll find a logo, or make one -->  */}
          <a
            onClick={() => {
              navigate("/");
            }}
            className="font-bold font-mono text-3xl text-slate-50 p-2 no-underline cursor-pointer transition delay-75 hover:text-cyan-400"
          >
            Weber Games
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
              className="font-mono hover:text-slate-400 group relative no-underline text-slate-50"
              onClick={logOut}
            >
              LogOut{" "}
              <span className="bg-cyan-400 absolute left-0 -bottom-1 w-0 h-1 transition-all group-hover:w-full"></span>
            </button>
          )}

          {/* <NavbarItem title="HangmanReact" href="/Hangman" />
          <NavbarItem title="Piggies!" href="/piggy_game/piggy.html" /> */}
        </div>

        {/* If I want to make it responsive I will. */}
      </div>
    </nav>
    // </section>
  );
};

export default Navbar;

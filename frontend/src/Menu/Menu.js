import { Link, useNavigate } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import "./Menu.css";

// We can set the username prop to the name state or undefined if the
// user is not logged in. If the user is not logged in, the menu will
// not display the user's name. It will also display a login button or register link.
// If the user is logged in, the menu will display the user's name and a logout button.
const Menu = ({ username }) => {
  let navigate = useNavigate();
  // const mainCategories = ["arcade", "shooter", "rpg", "fighting"];
  // const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  // const [categoriesContained, setCategoriesContained] = useState(false);
  // const categories = [
  //   "All",
  //   "MMO",
  //   "action",
  //   "adventure",
  //   "simulation",
  //   "puzzle",
  //   "indie",
  //   "platformer",
  //   "board",
  //   "casual",
  //   "racing",
  //   "sports",
  //   "racing",
  //   "strategy",
  //   "action",
  // ];

  // const categoryClickHandler = (e) => {
  //   console.log(e.target.innerHTML);
  // };

  // Set the categoriesContained flag if on smaller screens when the component loads
  // and when the window is resized
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 550) {
  //       setCategoriesContained(true);
  //     } else {
  //       setCategoriesContained(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="mt-20 h-screen">
      <CardGroup className="CardGroup">
        <Card
          className="hover:scale-105 transition-all delay-75 ease-in hover:bg-slate-300"
          onClick={() => {
            navigate("/hangman");
          }}
        >
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="font-mono">Hangman</Card.Title>
            <Card.Text>
              Put your skills to the test and try to guess the hidden word in 8
              guesses or less
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Game created by: Ian Tai Ahn</small>
          </Card.Footer>
        </Card>
        {/* <a href={"/piggy_game/piggy.html"}className="hover:text-slate-400 group relative no-underline text-slate-50"/> */}
        <Card
          className="HtmlCard hover:scale-105 transition-all delay-75 ease-in hover:bg-slate-300"
          onClick={() => {
            console.log("worked");
          }}
        >
          <a href="/piggy_game/piggy.html" className="ARefCard">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className="font-mono">Piggies!</Card.Title>
              <Card.Text>
                Do you think you are lucky? Are you willing to risk it all?
                Piggies is a game where you roll a dice and so long as it isn't
                a 1 you get the points. How long are you willing to risk it all?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Game created by: Dalton Orvis
              </small>
            </Card.Footer>
          </a>
        </Card>
        <Card
          className="hover:scale-105 transition-all delay-75 ease-in hover:bg-slate-300"
          onClick={() => {
            navigate("/piggy_game/piggy.html");
          }}
        >
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          {/* more games. */}
          <Card.Body>
            <Card.Title className="font-mono">Epic Sauce</Card.Title>
            <Card.Text>Game in development!</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              In development by a small studio...
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
    //   <nav>
    //     <ul>
    //       <div className="left-menu-wrapper">
    //         <li className="home-link">
    //           {/* <Link to="/HomePage">Home</Link> */}
    //           <p>Lets make this our game directory?</p>
    //         </li>
    //         {!categoriesContained && (
    //           <>
    //             {mainCategories.map((category) => (
    //               <li
    //                 key={Math.random() * 1000}
    //                 className="category-button-padding"
    //               >
    //                 <button
    //                   className="category-button"
    //                   onClick={categoryClickHandler}
    //                 >
    //                   {category}
    //                 </button>
    //               </li>
    //             ))}
    //           </>
    //         )}

    //         <div className="categories-dropdown">
    //           <li className="category-button-padding">
    //             <button
    //               className="category-button dropdown-button"
    //               onClick={() => setCategoriesExpanded(!categoriesExpanded)}
    //             >
    //               {categoriesContained ? (
    //                 "Categories"
    //               ) : categoriesExpanded ? (
    //                 <>More &#9662;</>
    //               ) : (
    //                 <>More &#9656;</>
    //               )}
    //             </button>
    //           </li>
    //           {categoriesExpanded && (
    //             <ul className="dropdown-content">
    //               {categoriesContained ? (
    //                 <>
    //                   {mainCategories.concat(categories).map((category) => (
    //                     <li key={Math.random() * 1000} className="dropdown-item">
    //                       <button
    //                         className="category-button"
    //                         onClick={categoryClickHandler}
    //                       >
    //                         {category}
    //                       </button>
    //                     </li>
    //                   ))}
    //                 </>
    //               ) : (
    //                 <>
    //                   {categories.map((category) => (
    //                     <li key={Math.random() * 1000} className="dropdown-item">
    //                       <button
    //                         className="category-button"
    //                         onClick={categoryClickHandler}
    //                       >
    //                         {category}
    //                       </button>
    //                     </li>
    //                   ))}
    //                 </>
    //               )}
    //             </ul>
    //           )}
    //         </div>
    //       </div>

    //       <div className="right-menu-wrapper">
    //         {!username && (
    //           <>
    //             <li className="auth-link">
    //               <Link to="/SignUpPage">Register</Link>
    //             </li>
    //             <li className="auth-link">
    //               <Link to="/LoginPage">Log In</Link>
    //             </li>
    //           </>
    //         )}

    //         {username && (
    //           <>
    //             <li className="user">
    //               <Link to={"/"} className="profile-link"></Link>
    //               <img
    //                 className="avatar"
    //                 src={`https://avatars.dicebear.com/api/avataaars/random-vato-${username}.svg`}
    //                 alt="avatar"
    //                 width="30px"
    //               />
    //               <p className="username">{username}</p>
    //             </li>
    //             <li className="auth-link">
    //               <Link to="/MenuTest">LogOut</Link>
    //             </li>
    //           </>
    //         )}
    //       </div>
    //     </ul>
    //   </nav>
  );
};

export default Menu;

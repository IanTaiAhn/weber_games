import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

// We can set the username prop to the name state or undefined if the
// user is not logged in. If the user is not logged in, the menu will
// not display the user's name. It will also display a login button or register link.
// If the user is logged in, the menu will display the user's name and a logout button.
const Menu = ({ username }) => {
  const mainCategories = ["arcade", "shooter", "rpg", "fighting"];

  // flag for whether the categories are expanded or not
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);

  // Flag for whether all the categories will be contained or ont
  const [categoriesContained, setCategoriesContained] = useState(false);

  const categories = [
    "All",
    "MMO",
    "action",
    "adventure",
    "simulation",
    "puzzle",
    "indie",
    "platformer",
    "board",
    "casual",
    "racing",
    "sports",
    "racing",
    "strategy",
    "action",
  ];

  // Handles the click event for the categories
  const categoryClickHandler = (e) => {
    console.log(e.target.innerHTML);
  };

  // Set the categoriesContained flag if on smaller screens when the component loads
  // and when the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 550) {
        setCategoriesContained(true);
      } else {
        setCategoriesContained(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <ul>
        <div className="left-menu-wrapper">
          <li className="home-link">
            <Link to="/HomePage">Home</Link>
          </li>
          {!categoriesContained && (
            <>
              {mainCategories.map((category) => (
                <li
                  key={Math.random() * 1000}
                  className="category-button-padding"
                >
                  <button
                    className="category-button"
                    onClick={categoryClickHandler}
                  >
                    {category}
                  </button>
                </li>
              ))}
              <Link className="" to="/Hangman">
                Hangman
              </Link>
            </>
          )}

          <div className="categories-dropdown">
            <li className="category-button-padding">
              <button
                className="category-button dropdown-button"
                onClick={() => setCategoriesExpanded(!categoriesExpanded)}
              >
                {categoriesContained ? (
                  "Categories"
                ) : categoriesExpanded ? (
                  <>More &#9662;</>
                ) : (
                  <>More &#9656;</>
                )}
              </button>
            </li>
            {categoriesExpanded && (
              <ul className="dropdown-content">
                {categoriesContained ? (
                  <>
                    {mainCategories.concat(categories).map((category) => (
                      <li key={Math.random() * 1000} className="dropdown-item">
                        <button
                          className="category-button"
                          onClick={categoryClickHandler}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    {categories.map((category) => (
                      <li key={Math.random() * 1000} className="dropdown-item">
                        <button
                          className="category-button"
                          onClick={categoryClickHandler}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="right-menu-wrapper">
          {!username && (
            <>
              <li className="auth-link">
                <Link to="/SignUpPage">Register</Link>
              </li>
              <li className="auth-link">
                <Link to="/LoginPage">Log In</Link>
              </li>
            </>
          )}

          {username && (
            <>
              <li className="user">
                <Link to={"/"} className="profile-link"></Link>
                <img
                  className="avatar"
                  src={`https://avatars.dicebear.com/api/avataaars/random-vato-${username}.svg`}
                  alt="avatar"
                  width="30px"
                />
                <p className="username">{username}</p>
              </li>
              <li className="auth-link">
                <Link to="/MenuTest">LogOut</Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Menu;

import { Link, useNavigate } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import "./Menu.css";

const Menu = ({ username }) => {
  let navigate = useNavigate();
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
          <a href="piggy_game/piggy.html" className="ARefCard">
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
  );
};

export default Menu;

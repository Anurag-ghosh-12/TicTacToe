import { useState } from "react";
import "./App.css";
import Tictactoe from "./components/Tic-tac-toe.jsx";
const initialBoard = () => Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard());
  return (
    <>
      <Tictactoe />
      <footer className="footer">
        <p className="footer">
          Created with <span className="redheart">❤️</span> by Anurag Ghosh
        </p>
      </footer>
    </>
  );
}

export default App;

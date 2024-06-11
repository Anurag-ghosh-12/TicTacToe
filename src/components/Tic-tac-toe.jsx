import useTictacToe from "../hooks/Use-tic-tac-toe";

function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage } = useTictacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;

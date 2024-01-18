import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="mx-auto rounded-xl border-4 border-orange-300 px-20 py-10 text-center">
        <h1 className="mb-5 text-3xl font-bold">Challenge On Task</h1>
        <h2>Select and Complete the tasks that is provided below</h2>

        <div className="card">
          <h3 className="text-xl font-bold">Count Duration</h3>
          <p className="mb-5">Level : Medium</p>
          <Link className="btn" to="/count-duration">
            Solve Challenge
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold">Currency Converter</h3>
          <p className="mb-5">Level : Medium</p>
          <Link className="btn" to={`/currency-converter`}>
            Solve Challenge
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold">Mobile Legend Heroes</h3>
          <p className="mb-5">Level : Hard</p>
          <Link className="btn" to={`/mobile-legend`}>
            Solve Challenge
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold">Tic Tac Toe Game</h3>
          <p className="mb-5">Level : Hard</p>
          <Link className="btn" to={`/tic-tac-toe`}>
            Solve Challenge
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold">Matching Card Game</h3>
          <p className="mb-5">Level : Hard</p>
          <Link className="btn" to={`/matching-card`}>
            Solve Challenge
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold">Salary Calculator</h3>
          <p className="mb-5">Level : Easy</p>
          <Link className="btn" to={`/salary-calculator`}>
            Solve Challenge
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold">Word Scramble Game</h3>
          <p className="mb-5">Level : Easy</p>
          <Link className="btn" to={`/word-scramble`}>
            Solve Challenge
          </Link>
        </div>
      </div>
    </>
  );
}

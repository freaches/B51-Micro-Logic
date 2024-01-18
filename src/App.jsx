import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CountDuration } from "./pages/CountDuration";
import { CurrencyCoverter } from "./pages/CurrencyConverter";
import { MobileLegend } from "./pages/MobileLegend";
import { TicTacToe } from "./pages/TicTacToe";
import { MatchingCard } from "./pages/MatchingCard";
import { SalaryCalculator } from "./pages/SalaryCalculator";
import { WordScramble } from "./pages/WordScramble";

function App() {
  return (
    <>
      <div className="container my-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count-duration" element={<CountDuration />} />
          <Route path="/currency-converter" element={<CurrencyCoverter />} />
          <Route path="/mobile-legend" element={<MobileLegend />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/matching-card" element={<MatchingCard />} />
          <Route path="/salary-calculator" element={<SalaryCalculator />} />
          <Route path="/word-scramble" element={<WordScramble />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

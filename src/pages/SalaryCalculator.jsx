import { useState } from "react";
import BackButton from "../components/BackButton";

export function SalaryCalculator() {
  const f = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const [salary, setSalary] = useState("");
  const [allowance, setAllowance] = useState("");
  const [tax, setTax] = useState("");
  const [gross, setGross] = useState(f.format(0));
  const [net, setNet] = useState(f.format(0));

  function calculateSalary(e) {
    e.preventDefault();
    const calGross = salary + allowance;
    const calNet = calGross - tax;
    setGross(f.format(calGross));
    setNet(f.format(calNet));
  }

  return (
    <>
      <BackButton />
      <h1 className="my-5 text-center text-3xl font-bold">Salary Calculator</h1>
      <div className="mt-10 flex flex-row flex-wrap justify-evenly">
        <form className="w-1/3 flex-none" onSubmit={calculateSalary}>
          <h2 className="mb-7 text-center text-xl font-bold">Calculator</h2>
          <div className="mb-5">
            <label htmlFor="salary" className="label">
              Main Salary
            </label>
            <div className="div-css">
              <input
                type="number"
                id="salary"
                inputMode="numeric"
                className="form-input"
                value={salary}
                onChange={(e) => setSalary(e.target.valueAsNumber)}
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="allowance" className="label">
              Allowance
            </label>
            <div className="div-css">
              <input
                type="number"
                id="alowance"
                inputMode="numeric"
                className="form-input"
                value={allowance}
                onChange={(e) => setAllowance(e.target.valueAsNumber)}
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="tax" className="label">
              Main Tax
            </label>
            <div className="div-css">
              <input
                type="number"
                id="tax"
                inputMode="numeric"
                className="form-input"
                value={tax}
                onChange={(e) => setTax(e.target.valueAsNumber)}
              />
            </div>
          </div>
          <button className="btn">Calculate</button>
        </form>
        <div className="w-1/3">
          <h2 className="mb-7 text-center text-xl font-bold"> Result</h2>
          <p>Gross Salary : {gross}</p>
          <p>Main Salary : {f.format(salary)}</p>
          <p>Net Salary : {net}</p>
        </div>
      </div>
    </>
  );
}

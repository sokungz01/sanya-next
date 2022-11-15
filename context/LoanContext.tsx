import { createContext } from "react";

interface LoanContextInterface {
  address: string;
  date: string;
  name: string;
  age: number;
}

const LoanCtx = createContext<LoanContextInterface | null>(null);

const sampleLoanContext: LoanContextInterface = {
  address: "",
  date: "",
  name: "",
  age: 0,
};

export const Loan = () => (
  <LoanCtx.Provider value={sampleLoanContext}>...</LoanCtx.Provider>
);

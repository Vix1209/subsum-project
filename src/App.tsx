import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/Home";
import AirtimeToCash from "./components/pages/AirtimeToCash";
import Support from "./components/pages/Support";
import History from "./components/pages/History";
import Accounts from "./components/pages/Dashboard/Account";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/account" element={<Accounts />} />

        <Route path="/buy-airtime" element={<p>Buy Airtime</p>} />

        <Route path="/buy-data" element={<p>Buy Data</p>} />

        <Route path="/subscription" element={<p>Subscribe</p>} />

        <Route path="/bill-payment" element={<p>Nepa bill Payment</p>} />

        <Route path="/airtime-to-cash" element={<AirtimeToCash />} />

        <Route path="/support" element={<Support />} />

        <Route path="/transaction-history" element={<History />} />

        <Route path="*" element={<p>Route Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;

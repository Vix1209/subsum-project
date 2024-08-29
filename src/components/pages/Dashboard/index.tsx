// import React from "react";

import { Button } from "@/components/ui/button";
import ATM from "@/assets/images/Dashboard/atm.png";

const Dashboard = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-2 gap-10 w-full px-5 lg:px-20">
        <div className="flex flex-col gap-y-3">
          <span className="p-5 rounded-3xl border">
            <div className=" flex items-center justify-between">
              <div className="text-3xl lg:text-4xl flex flex-col">
                <div className="lg:text-lg text-base">Wallet Balance</div>
                N3000
              </div>
              <Button className="lg:w-36">Fund Wallet</Button>
            </div>
          </span>

          <span className="p-5 rounded-3xl border">
            <div className="flex flex-col">
              <span>Referal</span>
              <span>
                Referal Code: <span>18/52ha089</span>
              </span>
              <div className="flex gap-x-2">
                <span>Copy</span>
                <span>Edit</span>
                <span>Share</span>
              </div>
            </div>
          </span>

          <span className="p-5 rounded-3xl border">
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <span>Total referrals made</span>
                <span>0</span>
                <span>Cashout</span>
              </div>
              <div className="flex flex-col text-end">
                <span>Current wallet balance</span>
                <span>N0.00</span>
              </div>
            </div>
          </span>
        </div>

        <div className="ms-auto">
          <img src={ATM} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

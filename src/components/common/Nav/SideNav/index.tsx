import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import Dash from "@/assets/icons/SideNav/dashIcon.png";
import Call from "@/assets/icons/SideNav/callIcon.png";
import Wifi from "@/assets/icons/SideNav/wifiIcon.png";
import TV from "@/assets/icons/SideNav/TViCON.png";
import Charge from "@/assets/icons/SideNav/charge.png";
import Recharge from "@/assets/icons/SideNav/recharge.png";
import Support from "@/assets/icons/SideNav/support.png";
import Invoice from "@/assets/icons/SideNav/invoice.png";

const SideNav = () => {
  const [selectedItem, setSelectedItem] = React.useState("Dashboard");
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-1 pt-10">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <div
            className={`${
              selectedItem === "Dashboard"
                ? " bg-primary text-white rounded-[12px]"
                : "text-[#6882B6]"
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (navigate("/"), setSelectedItem("Dashboard"))}
          >
            <img className="h-4 w-4 bg-gray-400" src={Dash} alt="" />
            Dashboard
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-3 text-[#6882B6] rounded-lg px-3 py-2 transition-all cursor-pointer">
                  <img src={Call} height={16} width={16} alt={""} />
                  Buy Airtime
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "BuyAirtime"
                      ? " bg-primary text-white rounded-[12px]"
                      : "text-[#6882B6] "
                  } flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm ms-5 transition-all hover:text-primary cursor-pointer`}
                  onClick={() => (
                    navigate("/buy-airtime"), setSelectedItem("BuyAirtime")
                  )}
                >
                  {/* <Users className="h-4 w-4" /> */}
                  Purchase MTN Airtime
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center text-[#6882B6] gap-3 rounded-lg px-3 py-2 transition-all cursor-pointer">
                  <img src={Wifi} height={16} width={16} alt={""} />
                  Buy Data
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "BuyData"
                      ? " bg-primary text-white rounded-[12px]"
                      : "text-[#6882B6]"
                  } flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm ms-5 transition-all hover:text-primary cursor-pointer`}
                  onClick={() => (
                    navigate("/buy-data"), setSelectedItem("BuyData")
                  )}
                >
                  <Users className="h-4 w-4" />
                  Purchase Data
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-3 rounded-lg text-[#6882B6] px-3 py-2 transition-all cursor-pointer">
                  <img src={TV} height={16} width={16} alt={""} />
                  TV Subscription
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "Subscribe"
                      ? " bg-primary text-white rounded-[12px]"
                      : "text-[#6882B6]"
                  } flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm ms-5 transition-all hover:text-primary cursor-pointer`}
                  onClick={() => (
                    navigate("/subscription"), setSelectedItem("Subscribe")
                  )}
                >
                  <Users className="h-4 w-4" />
                  Pay for DSTV
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-3 rounded-lg px-3 text-[#6882B6] py-2 transition-all cursor-pointer">
                  <img src={Charge} height={16} width={16} alt={""} />
                  Pay Electric Bill
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "NEPA-Bill"
                      ? " bg-primary text-white rounded-[12px]"
                      : "text-[#6882B6]"
                  } flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm ms-5 transition-all hover:text-primary cursor-pointer`}
                  onClick={() => (
                    navigate("/bill-payment"), setSelectedItem("NEPA-Bill")
                  )}
                >
                  <Users className="h-4 w-4" />
                  Pay NEPA bill
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div
            className={`${
              selectedItem === "airtime-to-cash"
                ? " bg-primary text-white rounded-[12px]"
                : "text-[#6882B6]"
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (
              navigate("/airtime-to-cash"), setSelectedItem("airtime-to-cash")
            )}
          >
            {/* <Home  */}
            <img className="h-4 w-4" src={Recharge} alt="" />
            Airtime To Cash
          </div>

          <div
            className={`${
              selectedItem === "TransactionHistory"
                ? " bg-primary text-white rounded-[12px]"
                : "text-[#6882B6]"
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (
              navigate("/transaction-history"),
              setSelectedItem("TransactionHistory")
            )}
          >
            {/* <ShoppingCart className="h-4 w-4" /> */}
            <img className="h-4 w-4" src={Invoice} alt="" />
            Transaction History
          </div>

          <div
            className={`${
              selectedItem === "Support"
                ? " bg-primary text-white rounded-[12px]"
                : "text-[#6882B6]"
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (navigate("/support"), setSelectedItem("Support"))}
          >
            <img className="h-4 w-4" src={Support} alt="" />
            Help & Support
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;

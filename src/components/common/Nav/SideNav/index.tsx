import React from "react";

import { Home, Package, ShoppingCart, Users } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const [selectedItem, setSelectedItem] = React.useState("Dashboard");
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-1 pt-10">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <div
            className={`${
              selectedItem === "Dashboard" ? " bg-[#F0F2F5] rounded-[12px]" : ""
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (
              navigate("/dashboard"), setSelectedItem("Dashboard")
            )}
          >
            <Home className="h-4 w-4" />
            Dashboard
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all cursor-pointer">
                  <img
                    src={"/icon/contentIcon.svg"}
                    height={16}
                    width={16}
                    alt={""}
                  />
                  Buy Airtime
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "BuyAirtime"
                      ? " bg-[#F0F2F5] rounded-[12px]"
                      : ""
                  } flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm ms-5 transition-all hover:text-primary cursor-pointer`}
                  onClick={() => (
                    navigate("/buy-airtime"), setSelectedItem("BuyAirtime")
                  )}
                >
                  <Users className="h-4 w-4" />
                  Purchase MTN Airtime
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all cursor-pointer">
                  <img
                    src={"/icon/contentIcon.svg"}
                    height={16}
                    width={16}
                    alt={""}
                  />
                  Buy Data
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "BuyData"
                      ? " bg-[#F0F2F5] rounded-[12px]"
                      : ""
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
                <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all cursor-pointer">
                  <img
                    src={"/icon/contentIcon.svg"}
                    height={16}
                    width={16}
                    alt={""}
                  />
                  TV Subscription
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "Subscribe"
                      ? " bg-[#F0F2F5] rounded-[12px]"
                      : ""
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
                <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all cursor-pointer">
                  <img
                    src={"/icon/contentIcon.svg"}
                    height={16}
                    width={16}
                    alt={""}
                  />
                  Pay Electric Bill
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`${
                    selectedItem === "NEPA-Bill"
                      ? " bg-[#F0F2F5] rounded-[12px]"
                      : ""
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
                ? " bg-[#F0F2F5] rounded-[12px]"
                : ""
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (
              navigate("/airtime-to-cash"), setSelectedItem("airtime-to-cash")
            )}
          >
            <Home className="h-4 w-4" />
            Airtime To Cash
          </div>

          <div
            className={`${
              selectedItem === "TransactionHistory"
                ? " bg-[#F0F2F5] rounded-[12px]"
                : ""
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (
              navigate("/transaction-history"),
              setSelectedItem("TransactionHistory")
            )}
          >
            <ShoppingCart className="h-4 w-4" />
            Transaction History
          </div>

          <div
            className={`${
              selectedItem === "Support" ? " bg-[#F0F2F5] rounded-[12px]" : ""
            } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
            onClick={() => (navigate("/support"), setSelectedItem("Support"))}
          >
            <Package className="h-4 w-4" />
            Help & Support
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;

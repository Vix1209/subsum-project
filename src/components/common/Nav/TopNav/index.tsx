import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import React from "react";
import { CircleUser, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SideNav from "../SideNav";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  const locate = useLocation();

  let displayText = "";

  switch (locate.pathname) {
    case "/":
      displayText = "Welcome, Lawal Wahab";
      break;
    case "/account":
      displayText = "Welcome, Lawal Wahab";
      break;
    case "/transaction-history":
      displayText = "Transaction History";
      break;
    case "/support":
      displayText = "Help And Support";
      break;
    case "/airtime-to-cash":
      displayText = "Airtime to Cash";
      break;
    default:
      displayText = "";
      break;
  }

  return (
    <div>
      <header className="flex h-14 items-center gap-4 border-l px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SideNav />
          </SheetContent>
        </Sheet>

        <div className="w-full flex-1 font-medium text-xl">
          <p> {displayText} </p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white p-5" align="end">
              <DropdownMenuItem onClick={() => navigate("/account")}>
                My Account
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default TopNav;

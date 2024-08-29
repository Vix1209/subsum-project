import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HomePage } from "@/components/pages/Home";
import React from "react";
interface HomeProp {
  app: ReactNode;
}

export function SideNav({ app }: HomeProp) {
  const locate = useLocation();
  const navigate = useNavigate();
  const homePage = locate.pathname === "/";
  const [selectedItem, setSelectedItem] = React.useState("Dashboard");
  return (
    <>
      {homePage ? (
        <HomePage />
      ) : (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="">Acme Inc</span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>

              <div className="flex-1">
                <nav className="grid  items-start px-2 text-sm font-medium lg:px-4">
                  <div
                    className={`${
                      selectedItem === "Dashboard"
                        ? " bg-[#F0F2F5] rounded-[12px]"
                        : ""
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
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm transition-all cursor-pointer">
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
                          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary cursor-pointer`}
                          onClick={() => (
                            navigate("/buy-airtime"),
                            setSelectedItem("BuyAirtime")
                          )}
                        >
                          <Users className="h-4 w-4" />
                          Purchase MTN Airtime
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm transition-all cursor-pointer">
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
                          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary cursor-pointer`}
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
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm transition-all cursor-pointer">
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
                          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary cursor-pointer`}
                          onClick={() => (
                            navigate("/subscription"),
                            setSelectedItem("Subscribe")
                          )}
                        >
                          <Users className="h-4 w-4" />
                          Pay for DSTV
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs lg:text-sm transition-all cursor-pointer">
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
                          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary cursor-pointer`}
                          onClick={() => (
                            navigate("/bill-payment"),
                            setSelectedItem("NEPA-Bill")
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
                      navigate("/airtime-to-cash"),
                      setSelectedItem("airtime-to-cash")
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
                      selectedItem === "Support"
                        ? " bg-[#F0F2F5] rounded-[12px]"
                        : ""
                    } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-4 cursor-pointer`}
                    onClick={() => (
                      navigate("/support"), setSelectedItem("Support")
                    )}
                  >
                    <Package className="h-4 w-4" />
                    Help & Support
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
                  <nav className="grid gap-2 text-lg font-medium">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Acme Inc</span>
                    </div>
                    <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
                      <Home className="h-5 w-5" />
                      Dashboard
                    </div>
                    <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        6
                      </Badge>
                    </div>
                    <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
                      <Package className="h-5 w-5" />
                      Products
                    </div>
                    <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
                      <Users className="h-5 w-5" />
                      Customers
                    </div>
                    <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
                      <LineChart className="h-5 w-5" />
                      Analytics
                    </div>
                  </nav>
                  <div className="mt-auto">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upgrade to Pro</CardTitle>
                        <CardDescription>
                          Unlock all features and get unlimited access to our
                          support team.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button size="sm" className="w-full">
                          Upgrade
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {app}
            </main>
          </div>
        </div>
      )}
    </>
  );
}

import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { AuthPage } from "@/components/pages/Auth";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Logo from "@/assets/icons/subsumLogo.png";

interface HomeProp {
  app: ReactNode;
}

export function Nav({ app }: HomeProp) {
  const locate = useLocation();
  const loginPage = locate.pathname === "/auth/login";
  return (
    <>
      {loginPage ? (
        <AuthPage />
      ) : (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden bg-muted/40 md:block">
            <div className="flex h-full lg:border-r max-h-screen flex-col">
              <a
                href="/"
                className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6"
              >
                <img src={Logo} alt="" />
              </a>

              <SideNav />
            </div>
          </div>
          <div className="flex flex-col">
            <TopNav />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {app}
            </main>
          </div>
        </div>
      )}
    </>
  );
}

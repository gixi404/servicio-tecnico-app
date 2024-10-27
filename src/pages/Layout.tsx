import { useEffect, type PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    addEventListener("contextmenu", (e: Event) => e.preventDefault());
  }, []);

  return (
    <div className="w-full justify-center items-center flex h-full relative">
      {children}
    </div>
  );
}

export default Layout;

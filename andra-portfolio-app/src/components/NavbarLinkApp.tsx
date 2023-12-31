import React from "react";
import NavbarLinkAnimated from "./NavbarLinkAnimated";

interface props {
  isMobile: boolean;
}

const NavbarLinkApp = React.memo(({ isMobile }: props) => {
  return (
    <div className="flex justify-center sm:w-[30rem] w-0  items-center font-semibold sm:bg-gradient-to-r from-cyan-500 opacity-60 to-cyan-300 rounded-full p-1 ">
      <div className="relative flex justify-center w-full h-full bg-white rounded-full ">
        {!isMobile && (
          <ul className="list-none flex gap-8  text-lg relative bottom-4 ">
            <NavbarLinkAnimated
              imgLogo={
                "https://img.icons8.com/sf-regular-filled/48/home-page.png"
              }
              text={"Home"}
              isMobile={isMobile}
            />
            <NavbarLinkAnimated
              imgLogo={"https://img.icons8.com/material/24/person-male.png"}
              text={"About"}
              isMobile={isMobile}
            />
            <NavbarLinkAnimated
              imgLogo={
                "https://img.icons8.com/sf-regular-filled/48/home-page.png"
              }
              text={"Experience"}
              isMobile={isMobile}
            />
            <NavbarLinkAnimated
              imgLogo={
                "https://img.icons8.com/material/24/experience-skill.png"
              }
              text={"Project"}
              isMobile={isMobile}
            />
          </ul>
        )}
        {isMobile && (
          <div className="flex justify-center">
            <ul className=" opacity-70  list-none mr-24 text-lg fixed bottom-0 top-0 z-20 mt-5 h-12 w-[16rem] bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full p-1    ">
              <div className="flex gap-12 justify-center w-full h-full bg-white relative  rounded-full  ">
                <NavbarLinkAnimated
                  imgLogo={
                    "https://img.icons8.com/sf-regular-filled/48/home-page.png"
                  }
                  text={"Home"}
                  isMobile={isMobile}
                />
                <NavbarLinkAnimated
                  imgLogo={"https://img.icons8.com/material/24/person-male.png"}
                  text={"About"}
                  isMobile={isMobile}
                />
                <NavbarLinkAnimated
                  imgLogo={
                    "https://img.icons8.com/sf-regular-filled/48/home-page.png"
                  }
                  text={"Experience"}
                  isMobile={isMobile}
                />
                <NavbarLinkAnimated
                  imgLogo={
                    "https://img.icons8.com/material/24/experience-skill.png"
                  }
                  text={"Project"}
                  isMobile={isMobile}
                />
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});

export default NavbarLinkApp;
NavbarLinkApp.displayName = "NavbarLinkApp";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

 
function NavList() {
  const windowAlert = () =>{
    alert("Gustavo is still working on this page")
  }
  return (
    <div className="mt-4">
      <ul className="my-2 
      flex flex-col gap-5 lg:mb-0 lg:mt-0 lg:items-center lg:flex-row items-center 
      flex-items-center lg:gap-2
      bg-gray-950
      rounded-4xl
      py-4
      ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="/about" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold" onClick={windowAlert}>
            About
            
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="/projects" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold" onClick={windowAlert}>
            Projects
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="/blog" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold" onClick={windowAlert}>
            Blogs
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        > 
          <a href="/contact" className="block px-4 py-2  hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold" onClick={windowAlert}>
            Contact
          </a>
        </Typography>
      </ul>
    </div>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="bg-black mx-auto border-black py-3">
      <div className="flex items-center mx-auto w-full justify-between max-w-screen-xl gap-2 text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className=" px-20 py-5 hover:rounded-full"
        > 
        <div className="flex items-center gap-1 -ml-7 bg-gray-900 rounded-full hover:scale-105 transition-transform">
          <img className="size-20 rounded-full" src="https://github.com/Gusttav28.png" alt="" />

          <div className="mr-5 py-4 pt-4 pr-5 bg-gray-900 rounded-full sm:rounded-full md:rounded-full lg:rounded-full">
            <h1 className="flex pl-4 gap-2 mr-4 font-bold">Gustavo Camacho</h1>

          </div>

        </div>
        </Typography>
        <div className="hidden lg:block justify-center">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="-mt-3 h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="-mt-3 h-6 w-10" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
      <div className="flex justify-center">
        <NavList />
      </div>
      </Collapse>
    </Navbar>
  );
}
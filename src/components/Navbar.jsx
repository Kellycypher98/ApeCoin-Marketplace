import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import "./../index.css";

export default function NavbarDefault() {
  return (
    <Navbar className="w-screen border-none rounded-none bg-black flex items-center  justify-between">
      <div className="flex flex-row space-x-3">
        <img
          className="w-10"
          src="src/apecoin-ape-ape-logo.png"
          alt="apecoin logo"
        />
        <Typography
          as="a"
          href="#"
          className=" cursor-pointer py-1.5 font-medium text-white"
        >
          Apecoin Boutique
        </Typography>
      </div>

      <Button variant="filled" color="blue">
        Connect Wallet
      </Button>
    </Navbar>
  );
}

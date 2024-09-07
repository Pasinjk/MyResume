import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <Button variant="ghost" size="iconNavbar">
        <a href="">
          <IoLogoLinkedin className="size-6" />
        </a>
      </Button>
      <Button variant="ghost" size="iconNavbar">
        <a href="https://github.com/Pasinjk">
          <FaGithub className="size-6" />
        </a>
      </Button>
    </div>
  );
};

export default Contact;

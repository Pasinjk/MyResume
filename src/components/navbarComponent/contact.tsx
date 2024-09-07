import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Button variant="ghost" size="iconGithub">
      <a href="https://github.com/Pasinjk">
        <FaGithub className="size-6" />
      </a>
    </Button>
  );
};

export default Contact;

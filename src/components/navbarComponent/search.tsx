import React from "react";
import { Button } from "@/components/ui/button";
import { IoMdSearch } from "react-icons/io";


const Search = () => {
  return (
    <Button variant="searchNav" size="searchNav">
      <IoMdSearch className="mr-2"/>
      Search on my website
    </Button>
  );
};

export default Search;

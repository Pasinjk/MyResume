"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { InputSearchDialog } from "@/components/ui/input";

const Search = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="searchNav" size="searchNav">
            <IoMdSearch className="mr-2" />
            Search on my website
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex text-center align-middle items-center">
              <IoMdSearch className="size-6" />
              <InputSearchDialog
                placeholder="Type to search"
                className="border-0"
              />
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;

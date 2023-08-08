"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/template/navbar";

export const NavbarProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Navbar />
    </>
  );
};

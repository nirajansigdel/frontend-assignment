import React from "react";
import Header from "./header";
import Firstimage, { Secondimage } from "../component/homeslice";

export default function Home() {
  return (
    <>
      <Header />
      <Firstimage />
      <Secondimage />
      <Firstimage />
      <Secondimage />
    </>
  );
}

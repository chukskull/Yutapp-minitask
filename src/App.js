import * as React from "react";
import MainContainer from "@/components/templates/MainContainer";
import "@/assets/global.css";
import Modal from "@/components/organisms/Modal";

export default function App() {
  return (
    <>
      <Modal />
      <MainContainer />;
    </>
  );
}

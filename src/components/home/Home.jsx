// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const options = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
}; // faltava aqui um "}"

// faltava definir o componente Home e fazer o export dele
const Home = () => (
  <div>
    <Menu />
    <Founder />
  </div>
);

export default Home;
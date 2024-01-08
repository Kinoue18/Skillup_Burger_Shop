// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import bg from "../../assets/bg.jpg";

const options = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
}; 

const Home = () => (
  <div>
    <img src={bg} alt="bg" height={700} width={1000} />
    <Menu />
    <Founder />
  </div>
);

export default Home;
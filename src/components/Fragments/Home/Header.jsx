import React from "react";
import { FaDonate } from "react-icons/fa";

const Emote = ({ isShow }) => {
  if (!isShow) {
    return null;
  }

  return (
    <p className=" animate-spinner">💫</p>
  )
}
const Donate = ({ isShow }) => {
  if (!isShow) {
    return null;
  }

  return (
    <a href="https://saweria.co/isadnat" target="_blank"><FaDonate size={25} /></a>
  )
}
const List = ({ text, isShow }) => {
  if (!isShow) {
    return null;
  }

  return (
    <ul>
      <li className="list-disc">{text}</li>
    </ul>
  );
};
const Header = ({ title, description, showList, showDonate }) => {
  return (
    <div className="mb-5">
      <div className="text-3xl font-bold mb-2 flex justify-between items-center">
        <div className="flex gap-2">
          <h1>{title}</h1>
          <Emote isShow={showList} />
        </div>
        <Donate isShow={showDonate} />
      </div>
      {showList && (
        <div className="mx-4 flex gap-12 mb-5 text-sm font-medium">
          <List text="Fullstack Developer" isShow={showList} />
          <List text="Based in Bogor" isShow={showList} />
        </div>
      )}
      <p className="leading-loose tracking-wide">{description}</p>
    </div>
  );
};

export default Header;

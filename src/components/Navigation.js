import { useState } from "react";
import SideMenu from "./Sidemenu";
import { Transition } from "react-transition-group";
import { useRef } from "react";
const duration = 500;

const Navigation = () => {
  const nodeRef = useRef(null);
  const [side, setSide] = useState(false);
  return (
    <nav className="flex justify-between">
      <img src="./Logo.svg" alt="logo" />
      <button onClick={() => setSide(true)}>
        <img src="./Menu.svg" alt="menu" />
      </button>
      <Transition nodeRef={nodeRef} in={side} timeout={duration}>
        {(state) => <SideMenu ref={nodeRef} state={state} setSide={setSide} />}
      </Transition>
    </nav>
  );
};

export default Navigation;

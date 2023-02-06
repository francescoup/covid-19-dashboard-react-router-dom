import React, { useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillCaretDown, AiOutlineMenuFold } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useGlobalContext } from "../../Context";
import Button from "../../Atoms/Button";
import man from "../../Assets/img/man.png";
import ModalMenu from "../ModalMenu/ModalMenu";
import styles from "./Navbar.module.css";
import { useMobile, useClickOutside } from "../../CustomHook";

const Navbar = () => {
  const {
    toggleSidebar,
    isOpen,
    toggleModal,
    theme,
    themeSwitch,
    setIsModalOpen,
  } = useGlobalContext();
  const isMobile = useMobile(639);
  const ref = useRef();
  useClickOutside(ref, () => {
    setIsModalOpen(false);
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {isMobile ? (
          <Button classname={styles.navbarIcons} handler={toggleSidebar}>
            <HiMenuAlt3 />
          </Button>
        ) : (
          <Button classname={styles.navbarIcons} handler={toggleSidebar}>
            {isOpen ? <HiMenuAlt3 /> : <AiOutlineMenuFold />}
          </Button>
        )}

        <Button classname={styles.navbarIcons} handler={themeSwitch}>
          {theme === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </Button>
      </div>
      <div ref={ref} onClick={toggleModal} className={styles.navbarProfile}>
        <Button classname={styles.userProfile}>
          <img className="w-[35px]" src={man} alt="Avatar" />
        </Button>
        <p className={styles.userName}>F. Mangione</p>
        <AiFillCaretDown className={styles.menuIcon} />
        <ModalMenu />
      </div>
    </nav>
  );
};

export default Navbar;

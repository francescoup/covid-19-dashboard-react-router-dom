import React from "react";
import { SidebarMenu } from "../../Atoms/Links";
import styles from "./Sidebar.module.css";
import Button from "../../Atoms/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../Context";

const Sidebar = ({ data }) => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <div>
      <SidebarMenu classMenu={styles.sidebar} subMenu={data} styles={styles} />
      <Button classname={styles.buttonStyle} handler={toggleSidebar}>
        <AiOutlineClose />
      </Button>
    </div>
  );
};

export default Sidebar;

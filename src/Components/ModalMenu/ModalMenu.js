import { useRef } from "react";
import { useGlobalContext } from "../../Context";
import { UserMenu } from "../../Atoms/Links";
import styles from "./Modal.module.css";
import useClickOutside from "../../CustomHook/useClickOutside";

const ModalMenu = () => {
  const { isModalOpen, setIsModalOpen } = useGlobalContext();

  return (
    <>
      {isModalOpen && (
        <div className={`${styles.modalOpen} ${styles.modal}`}>
          <UserMenu classLink={styles.ModalMenu} navItem={styles.links} />
        </div>
      )}
    </>
  );
};

export default ModalMenu;

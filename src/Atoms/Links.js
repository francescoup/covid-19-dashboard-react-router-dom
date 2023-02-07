import React from "react";
import {
  AiOutlineGlobal,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineApi,
} from "react-icons/ai";
import { FaVirus } from "react-icons/fa";
import { TbVaccine } from "react-icons/tb";
import { MdSick } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { useSearchParams } from "react-router-dom";

const userLink = [
  {
    url: "https://francescoup.github.io/start2impact-project/",
    text: "Portfolio",
    icon: <AiOutlineGlobal />,
  },
  {
    url: "https://www.linkedin.com/in/francesco-mangione/",
    text: "Linkedin",
    icon: <AiOutlineLinkedin />,
  },
  {
    url: "https://github.com/francescoup",
    text: "Github",
    icon: <AiFillGithub />,
  },
  {
    url: "https://github.com/pcm-dpc/COVID-19",
    text: "API",
    icon: <AiOutlineApi />,
  },
];

export const UserMenu = ({ classLink, navItem }) => {
  return (
    <ul className={classLink}>
      {userLink.map((el, i) => {
        return (
          <li key={`menu-utente-${i}`}>
            <a
              href={el.url}
              className={navItem}
              target="_blank"
              rel="noreferrer"
            >
              {el.icon}
              {el.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const sidebarlinks = [
  {
    url: "/",
    text: "Covid 19 Dashboard",
    icon: <FaVirus />,
  },
  {
    filtro: true,
  },
  {
    url: "/vaccini",
    text: "Vaccini",
    icon: <TbVaccine />,
  },
  {
    url: "/sintomi",
    text: "Sintomi",
    icon: <MdSick />,
  },
];

export const SidebarMenu = ({ classMenu, subMenu, styles }) => {
  const { closeSidebar } = useGlobalContext();
  let [searchParams] = useSearchParams();

  return (
    <ul>
      {sidebarlinks.map((el, i) => {
        if (el.filtro) {
          return (
            <div className={styles.sidebarMenu} key={i}>
              <div className={styles.sidebarScrollbar}>
                <ul>
                  {subMenu.map((regione, i) => {
                    let isActive = searchParams.get("regione") === regione;
                    return (
                      <li key={i} onClick={closeSidebar}>
                        <Link
                          className={`${styles.filterLink} 
                          ${isActive ? styles.activeFilterLink : ""}
                        `}
                          key={`lista-regioni-${i}`}
                          to={`/?regione=${regione}`}
                        >
                          {regione}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }

        return (
          <li key={`link-${el.text}`}>
            <NavLink
              key={el.text}
              to={el.url}
              className={classMenu}
              onClick={closeSidebar}
            >
              {el.icon} {el.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

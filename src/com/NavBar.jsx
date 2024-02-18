import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarNavItems = [
  {
    display: "الحسابات",
    icon: <i className="bx bx-user"></i>,
    to: "/Gtgs",
    section: "Gtgs",
  },
  {
    display: "إضافة حساب",
    icon: <i className="bx bx-user"></i>,
    to: "/NewGtgs",
    section: "NewGtgs",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = location.pathname.split("/")[1];

    const curIndex = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curIndex);
  }, [location]);

  return (
    <div className="sidebar">
     
 
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index} className="">
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
              style={{ color: activeIndex === index ? "" : "black" }}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      
    </div>
  );
};

export default Sidebar;

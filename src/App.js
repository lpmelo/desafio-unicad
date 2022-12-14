import "./App.css";
import { Menu, Segment } from "semantic-ui-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  switchToHome,
  switchToRegisterDelivery,
  switchToTableDelivery,
} from "./features/pageSwitcher/pageSwitcherSlice";
import HomePage from "./components/pages/HomePage/HomePage";
import RegisterDelivery from "./components/pages/RegisterDelivery/RegisterDelivery";
import VisualizeDeliveries from "./components/pages/VisualizeDeliveries/VisualizeDeliveries";
import IconBox from "./components/icons/IconBox";
import IconEye from "./components/icons/IconEye";
import IconHome from "./components/icons/IconHome";

const App = () => {
  const [activeItem, setActiveItem] = useState("home");
  const pageElementSwitcher = useSelector((state) => state.pageSwitcher.item);
  const dispatch = useDispatch();
  const returnPageContent = (pageElementNumber) => {
    const index = {
      0: <HomePage />,
      1: <RegisterDelivery />,
      2: <VisualizeDeliveries />,
    };

    const formattedIndex = index[pageElementNumber];
    return formattedIndex;
  };

  const handleItemClick = (e, { name }) => {
    name === "home"
      ? dispatch(switchToHome())
      : name === "Cadastro de entregas"
      ? dispatch(switchToRegisterDelivery())
      : dispatch(switchToTableDelivery());

    setActiveItem(name);
  };

  return (
    <div className="App">
      <div className="header-container">
        <Segment inverted className="menu-container">
          <Menu inverted pointing secondary className="menu">
            <Menu.Item
              name="home"
              icon={IconHome}
              active={activeItem === "home"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Cadastro de entregas"
              icon={IconBox}
              active={activeItem === "Cadastro de entregas"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Visualizar entregas"
              icon={IconEye}
              active={activeItem === "Visualizar entregas"}
              onClick={handleItemClick}
            />
          </Menu>
        </Segment>
      </div>
      <div className="content-container">
        {returnPageContent(pageElementSwitcher)}
      </div>
      <div className="footer-container"></div>
    </div>
  );
};

export default App;

import "./App.css";
import { Menu, Segment } from "semantic-ui-react";
import { useEffect, useState } from "react";
import iconHome from "./components/icons/iconHome";
import { useDispatch, useSelector } from "react-redux";
import {
  switchToHome,
  switchToRegisterDelivery,
  switchToTableDelivery,
} from "./features/pageSwitcher/pageSwitcherSlice";
import HomePage from "./components/pages/HomePage";

const App = () => {
  const [activeItem, setActiveItem] = useState("home");
  const pageElementSwitcher = useSelector((state) => state.pageSwitcher.item);
  const dispatch = useDispatch();
  const returnPageContent = (pageElementNumber) => {
    const index = {
      0: <HomePage />,
      1: <HomePage />,
      2: <HomePage />,
    };

    const formattedIndex = index[pageElementNumber];
    return formattedIndex;
  };

  const handleItemClick = (e, { name }) => {
    name === "home"
      ? dispatch(switchToHome())
      : name === "messages"
      ? dispatch(switchToRegisterDelivery())
      : dispatch(switchToTableDelivery());

    setActiveItem(name);
  };

  return (
    <div className="App">
      <div className="header-container">
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              name="home"
              icon={iconHome}
              active={activeItem === "home"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={activeItem === "friends"}
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

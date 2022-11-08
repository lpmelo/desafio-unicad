import "./App.css";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { useState } from "react";
import iconHome from "./components/icons/iconHome";

function App() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
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
    </div>
  );
}

export default App;

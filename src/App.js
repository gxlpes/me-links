import { Card } from "../src/components/Styles/Card";
import { Content } from "./components/Styles/Content";
import Profile from "./components/Profile/Profile";
import Links from "./components/Links/Links";

function App() {
  return (
    <Card>
      <Content>
        <Profile />
        <Links />
      </Content>
    </Card>
  );
}

export default App;

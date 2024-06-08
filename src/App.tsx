import HomeScreen from "@screens/home";
import store from "@store/index";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;

import "react-native-gesture-handler";
import store from "@/store";
import { Provider } from "react-redux";
import StackRouter from "@routes/stacks";

const App = () => {
  return (
    <Provider store={store}>
      <StackRouter />
    </Provider>
  );
};

export default App;

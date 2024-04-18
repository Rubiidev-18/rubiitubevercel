import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContanier from "./components/MainContanier";
import WatchPage from "./components/WatchPage";
import Memoization from "./components/Memoization";
import UseRef from "./components/UseRef";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [

    {
      path: "/",
      element: <MainContanier />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
    {
      path: "memoization",
      element: <><Memoization /> <UseRef/></>,
    },
  ],
}]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

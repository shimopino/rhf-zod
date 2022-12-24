import {
  DefaultGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router,
} from "@tanstack/react-location";
import { ReactLocationDevtools } from "react-location-devtools";

const location = new ReactLocation();
const routes: Route<DefaultGenerics>[] = [
  {
    path: "/",
  },
];

function App() {
  return (
    <Router location={location} routes={routes}>
      <div className="App">
        <h1>Hello World</h1>
      </div>
      <Outlet />
      <ReactLocationDevtools initialIsOpen={false} />
    </Router>
  );
}

export default App;

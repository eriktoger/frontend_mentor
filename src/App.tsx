import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { challanges } from "./constants";
import favicon from "favicon.ico";

const App = () => {
  return (
    <Routes>
      {challanges.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
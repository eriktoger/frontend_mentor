import { Route, Routes } from "react-router-dom";
import Home from "./Challenges/Home";
import { challenges } from "./constants";

const App = () => {
  return (
    <Routes>
      {challenges.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;

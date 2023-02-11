import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import SignIn from "./routes/auth";
import Navigation from "./routes/navigation";

const Shop = () => <div>I am the Shop</div>;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

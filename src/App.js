import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import SignIn from "./routes/auth";
import Navigation from "./routes/navigation";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

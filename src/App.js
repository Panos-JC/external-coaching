import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ItemPage from "./routes/ItemPage";
// import PostPage from './routes/PostPage';
// import UserPage from './routes/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ItemPage />} />
    </Routes>
  );
}

export default App;

import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import User from "./Components/User";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Useprofile from "./Components/Useprofile";
import Article from "./Components/Article";
import Blog from "./Components/Blog";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/us">User</Link>
        <Link to="/Con">Contact</Link>
        <Link to="/user/:123">View user</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/us" element={<User />}></Route>
        <Route path="/con" element={<Contact />}></Route>
        <Route path="/user/:userId" element={<Useprofile />}></Route>
        <Route path="/blog/*" element={<Blog />}>
          <Route path=":articled" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

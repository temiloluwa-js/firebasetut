import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
function App() {
  const [isAuth, setisAuth] = useState(false)
  return (
    <Router>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/createpost" className={styles.link}>
          Create Post
        </Link>
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setisAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;

import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  const [isAuth, setisAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setisAuth(false);
      window.location.pathname = 'login'
    })
  }
  return (
    <Router>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/createpost" className={styles.link}>
          Create Post
        </Link>
        {!isAuth ? (
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        ) : <button onClick={signUserOut}>Sign Out</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setisAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;

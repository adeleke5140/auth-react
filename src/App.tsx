import "./App.css";
import { Form } from "./components/common/Form";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { app } from "../firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
enum FormType {
  Login = 1,
  SignUp = 2,
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("Auth Token");

  //   if (authToken) {
  //     navigate("/dashboard");
  //   }
  // }, []);

  const handleAction = (formType: FormType) => {
    const auth = getAuth(app);
    if (formType === FormType.SignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          sessionStorage.setItem("Auth Token", res.user.refreshToken);
          navigate("/dashboard");
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
    if (formType === FormType.Login) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          navigate("/dashboard");
          sessionStorage.setItem("Auth Token", res.user.refreshToken);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email already in Use");
          }
        });
    }
  };

  return (
    <div className="App">
      <>
        <ToastContainer />;
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Form
                type="Login"
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(FormType.Login)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                type="Sign up"
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(FormType.SignUp)}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

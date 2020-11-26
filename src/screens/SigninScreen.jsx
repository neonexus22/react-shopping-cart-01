import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { signin } from "../redux/actions/userActions";

const SignInScreen = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("1234");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, redirect]);

  return (
    <div className="">
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Sign In</h1>
        </div>

        {loading && (
          <div>
            <LoadingBox />
          </div>
        )}
        {error && (
          <MessageBox variant="danger">Invalid Email / Password</MessageBox>
        )}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="signin-input"
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="signin-input"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInScreen;

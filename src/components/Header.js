import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authtentication.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        {auth && (
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </Fragment>
  );
};

export default Header;

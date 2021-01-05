import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeSearchbarValue,
  enableSearchButton,
} from "../../redux/searchActions";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const searchbarValue = useSelector((state) => state.search.searchState);
  const submitHandler = () => {
    if (searchbarValue.length > 0) {
      dispatch(enableSearchButton());
    }
  };
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo}>
        <svg
          stroke="#3d5af1"
          fill="#3d5af1"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 201.5 305.5 c -13.8 0 -24.9 -11.1 -24.9 -24.6 c 0 -13.8 11.1 -24.9 24.9 -24.9 c 13.6 0 24.6 11.1 24.6 24.9 c 0 13.6 -11.1 24.6 -24.6 24.6 Z M 504 256 c 0 137 -111 248 -248 248 S 8 393 8 256 S 119 8 256 8 s 248 111 248 248 Z m -132.3 -41.2 c -9.4 0 -17.7 3.9 -23.8 10 c -22.4 -15.5 -52.6 -25.5 -86.1 -26.6 l 17.4 -78.3 l 55.4 12.5 c 0 13.6 11.1 24.6 24.6 24.6 c 13.8 0 24.9 -11.3 24.9 -24.9 s -11.1 -24.9 -24.9 -24.9 c -9.7 0 -18 5.8 -22.1 13.8 l -61.2 -13.6 c -3 -0.8 -6.1 1.4 -6.9 4.4 l -19.1 86.4 c -33.2 1.4 -63.1 11.3 -85.5 26.8 c -6.1 -6.4 -14.7 -10.2 -24.1 -10.2 c -34.9 0 -46.3 46.9 -14.4 62.8 c -1.1 5 -1.7 10.2 -1.7 15.5 c 0 52.6 59.2 95.2 132 95.2 c 73.1 0 132.3 -42.6 132.3 -95.2 c 0 -5.3 -0.6 -10.8 -1.9 -15.8 c 31.3 -16 19.8 -62.5 -14.9 -62.5 Z M 302.8 331 c -18.2 18.2 -76.1 17.9 -93.6 0 c -2.2 -2.2 -6.1 -2.2 -8.3 0 c -2.5 2.5 -2.5 6.4 0 8.6 c 22.8 22.8 87.3 22.8 110.2 0 c 2.5 -2.2 2.5 -6.1 0 -8.6 c -2.2 -2.2 -6.1 -2.2 -8.3 0 Z m 7.7 -75 c -13.6 0 -24.6 11.1 -24.6 24.9 c 0 13.6 11.1 24.6 24.6 24.6 c 13.8 0 24.9 -11.1 24.9 -24.6 c 0 -13.8 -11 -24.9 -24.9 -24.9 Z"></path>
        </svg>
      </div>
      <div className={styles.logo_p_container}>
        <p className={styles.logo_p}>
          <span className={styles.logo_span}>Reddit</span>Minimal
        </p>
      </div>
      <div className={styles.subreddit_search_container}>
        <input
          type="text"
          placeholder="Search"
          value={searchbarValue}
          onChange={(e) => dispatch(changeSearchbarValue(e.target.value))}
          onSubmit={submitHandler}
        />
        <button onClick={submitHandler}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

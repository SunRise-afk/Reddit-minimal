import React, { useState } from "react";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import { Navbar } from "../Navbar/Navbar";

export const ClientContainer = () => {
  const [searchState, setSearchState] = useState("");
  const [searchButtonState, setSearchButtonState] = useState(false);
  return (
    <>
      <Navbar
        searchbarValue={searchState}
        changeHandler={setSearchState}
        searchButtonClickHandler={setSearchButtonState}
      ></Navbar>
      <ContentContainer
        setSearchButtonState={setSearchButtonState}
        searchButtonState={searchButtonState}
        searchbarValue={searchState}
        setSearchbarValue={setSearchState}
      ></ContentContainer>
    </>
  );
};

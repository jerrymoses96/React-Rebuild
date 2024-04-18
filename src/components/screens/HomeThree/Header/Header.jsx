import React from "react";
import { HeaderMid } from "./HeaderMid";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";
import { HeaderDown } from "./HeaderDown";

export function Header(props) {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      {/* Headertop  */}

      <HeaderTop />
      <div className="flex flex-col items-center wrapper justify-start w-full border-gray-200 border-b border-solid">
        <HeaderMid />
        <HeaderBottom
          searchBarValue1={props.searchBarValue1}
          setSearchBarValue1={props.setSearchBarValue1}
        />

        <HeaderDown />
      </div>
    </header>
  );
}

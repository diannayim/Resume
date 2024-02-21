"use client";

import { Page } from "@/app/constants/pages";
import Link from "next/link";
import { Dispatch, ReactElement, SetStateAction } from "react";
import {
  CSSObject,
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  menuClasses,
} from "react-pro-sidebar";

const ResumeSidebar = ({
  page,
  setPage,
}: {
  page: string;
  setPage: Dispatch<SetStateAction<Page>>;
}): ReactElement => {
  const pagesMenuItemStyle: MenuItemStyles = {
    [`&.${menuClasses.menuItemRoot}`]: {
      backgroundColor: "blue",
    },
    [`&.${menuClasses.active}`]: { backgroundColor: "black" },
  };

  return (
    <Sidebar>
      <Menu menuItemStyles={pagesMenuItemStyle}>
        <MenuItem
          component={<Link href="/home" />}
          onClick={() => setPage(Page.HOME)}
        >
          Pie charts
        </MenuItem>
        <MenuItem> Line charts </MenuItem>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default ResumeSidebar;

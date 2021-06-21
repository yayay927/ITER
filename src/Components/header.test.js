import React from "react";
import { render, screen } from "@testing-library/react";
// import Header from "./header.js";

describe("test of user login process", () => {
  xtest("input no email and no password", () => {
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please enter login and password!"
    );
  });
  xtest("input email, no password", () => {
    const response = screen.getByText(/Login/);
    expect(response).toBeInTheDocument(); //這行需要？

    console.log(response);
  });
  //問題：如何加入測試用改變的數
  xtest("no email, input password", () => {});
  xtest("input email and password", () => {});
});

// describe("僱員的行為測試", () => {
//   test("點餐內容與顧客需求相符", () => {});
//   test("結帳金額正確", () => {});
//   test("找零的金額正確", () => {});
// });

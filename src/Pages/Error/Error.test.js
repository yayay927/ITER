import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "./Error.js";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("test of 404 page", () => {
  //測試按鈕會不會render
  test("should render button correctly", () => {
    render(
      <MemoryRouter initialEntries={["/error"]}>
        <Switch>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/">
            <h1>Copyright © 2021 TY Yang All rights reserved.</h1>
          </Route>
        </Switch>
      </MemoryRouter>
    );
    const buttonElement = screen.getByText(/back to world/);
    expect(buttonElement).toBeInTheDocument();
  });
  //測試點擊按鈕會不會到首頁
  test("should redirect to main page", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/error"]}>
        <Switch>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/">
            <h1>Copyright © 2021 TY Yang All rights reserved.</h1>
          </Route>
        </Switch>
      </MemoryRouter>
    );
    expect(container.innerHTML).toMatch("Sorry");

    const buttonElement = screen.getByText("back to world");
    userEvent.click(buttonElement);

    expect(container.innerHTML).not.toMatch("Sorry");
  });
});

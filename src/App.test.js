import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";

xtest("renders learn react link", () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//it

//測component tt
// it("rders learn react link", async() => {
//   render(<App />);
//   const linkElement = await screen.findByText(/get email/i);
//   expect(linkElement).toBeInTheDocument();
// });

//測互動
// fireEvent(
//   buttonElement
// )

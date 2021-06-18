import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//it

//測component tt
// tt("rders learn react link", async() => {
//   render(<App />);
//   const linkElement = await screen.findByText(/get email/i);
//   expect(linkElement).toBeInTheDocument();
// });

//測互動
// fireEvent(
//   buttonElement
// )

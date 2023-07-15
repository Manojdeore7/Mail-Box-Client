import { render, screen } from "@testing-library/react";
import SignIn from "./SignIn";
describe("suit for signIn", () => {
  test("renders learn react link", () => {
    render(<SignIn />);
    const linkElement = screen.getByText("SignIn");
    expect(linkElement).toBeInTheDocument();
  });
});

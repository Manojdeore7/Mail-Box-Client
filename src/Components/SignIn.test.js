import { render, screen } from "@testing-library/react";
import SignIn from "./SignIn";
describe("suit for signIn", () => {
  test("renders learn react link", () => {
    render(<SignIn />);
    const Element = screen.getByText("LogIn");
    expect(Element).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<SignIn />);
    const Element = screen.getByText("Email address");
    expect(Element).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<SignIn />);
    const Element = screen.getByText("Submit");
    expect(Element).toBeInTheDocument();
  });
});

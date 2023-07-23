import { render, screen } from "@testing-library/react";
import Sent from "./Sent";
describe("suit for Sent", () => {
  test("renders learn react link", () => {
    render(<Sent />);
    const Element = screen.getByText("email");
    expect(Element).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<Sent />);
    const Element = screen.getByText("subject");
    expect(Element).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<Sent />);
    const Element = screen.getByText("message");
    expect(Element).toBeInTheDocument();
  });
});

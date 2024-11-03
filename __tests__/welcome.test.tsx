/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Adder from "src/app/components/adder";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Adder />);
    const heading = screen.getByText(/Hello!/i);
    expect(heading).toBeInTheDocument();
  });
});

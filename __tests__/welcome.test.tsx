/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "src/app/page";

describe("Home component", () => {
  it("renders homepage", () => {
    render(<Home />);
    expect(screen.getByText(/String Adder/i)).toBeInTheDocument();
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("delimiter")).toBeInTheDocument();
    expect(screen.getByTestId("numbersString")).toBeInTheDocument();
    expect(screen.getByTestId("submitButton")).toBeInTheDocument();
  });
});

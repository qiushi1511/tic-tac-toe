import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Heading from "./Heading";

describe("<Heading />", () => {
  it("renders heading", () => {
    render(<Heading />);
    expect(screen.getByText("Tic-Tac-Toe")).toBeInTheDocument();
  });
});

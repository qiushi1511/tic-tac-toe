import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import Game from "./Game";

describe("<Game />", () => {
  it('starts with "Next player: X"', () => {
    render(<Game />);

    expect(screen.getByText("Next player: X")).toBeInTheDocument();
  });

  it("updates the player turn on each click", () => {
    render(<Game />);

    // Click on the first square
    const firstSquare = screen.getAllByRole("button", { name: "" })[0];
    fireEvent.click(firstSquare);

    expect(firstSquare).toHaveTextContent("X");
    expect(screen.getByText(/Next player: O/i)).toBeInTheDocument();
  });
});

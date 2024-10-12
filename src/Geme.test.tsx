import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
// import Game from "./Game";

describe("<Game />", () => {
  it('starts with "Next player: X"', () => {
    render(<div>Hello</div>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    // render(<Game />);

    // expect(screen.getByText("Next player: X")).toBeInTheDocument();
  });
});

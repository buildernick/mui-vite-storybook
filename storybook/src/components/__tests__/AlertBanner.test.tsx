import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlertBanner from "../AlertBanner";

describe("AlertBanner", () => {
  it("renders with default props", () => {
    render(<AlertBanner />);
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument(); // Icon
  });

  it("renders title and description when provided", () => {
    render(<AlertBanner title="Test Title" description="Test Description" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(<AlertBanner title="Test Alert" onClose={handleClose} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls action.onClick when action button is clicked", () => {
    const handleAction = jest.fn();
    render(
      <AlertBanner
        title="Test Alert"
        action={{
          label: "Test Action",
          onClick: handleAction,
        }}
      />
    );

    const actionButton = screen.getByText("Test Action");
    fireEvent.click(actionButton);

    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it("renders different severity levels correctly", () => {
    const { rerender } = render(<AlertBanner severity="error" title="Error" />);
    expect(screen.getByText("Error")).toBeInTheDocument();

    rerender(<AlertBanner severity="warning" title="Warning" />);
    expect(screen.getByText("Warning")).toBeInTheDocument();

    rerender(<AlertBanner severity="info" title="Info" />);
    expect(screen.getByText("Info")).toBeInTheDocument();

    rerender(<AlertBanner severity="success" title="Success" />);
    expect(screen.getByText("Success")).toBeInTheDocument();
  });

  it("hides title when showTitle is false", () => {
    render(
      <AlertBanner
        title="Hidden Title"
        description="Visible Description"
        showTitle={false}
      />
    );

    expect(screen.queryByText("Hidden Title")).not.toBeInTheDocument();
    expect(screen.getByText("Visible Description")).toBeInTheDocument();
  });

  it("hides description when showDescription is false", () => {
    render(
      <AlertBanner
        title="Visible Title"
        description="Hidden Description"
        showDescription={false}
      />
    );

    expect(screen.getByText("Visible Title")).toBeInTheDocument();
    expect(screen.queryByText("Hidden Description")).not.toBeInTheDocument();
  });
});

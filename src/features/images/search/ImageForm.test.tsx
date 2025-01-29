import {
  act,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { useRouter } from "next/navigation";

import { ImageForm } from "./ImageForm";

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: pushMock,
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}));

describe("ImageForm", () => {
  test("should correctly render form with 3 fields", async () => {
    render(<ImageForm />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Surname")).toBeInTheDocument();
    expect(screen.getByLabelText("Preferred topic")).toBeInTheDocument();
  });

  test("should display customTopic field when other topic is selected", async () => {
    render(<ImageForm />);
    const select = screen.getByLabelText("Preferred topic");
    await act(async () => {
      fireEvent.change(select, { target: { value: "other" } });
    });

    expect(screen.getByLabelText("Please specify topic")).toBeInTheDocument();
  });

  test("should redirect to /image-select when form values are valid", async () => {
    render(<ImageForm />);
    const nameInput = screen.getByLabelText("Name");
    const surnameInput = screen.getByLabelText("Surname");
    const select = screen.getByLabelText("Preferred topic");

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "John" } });
      fireEvent.change(surnameInput, { target: { value: "Doe" } });
      fireEvent.change(select, { target: { value: "cars" } });
    });

    const submitButton = screen.getByText("Search image");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/image-select");
    });
  });
});

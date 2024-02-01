import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("add button adds item", () => {
  render(<App />);
  const addButton = screen.getByTestId("add-button");

  const oldList = screen.getAllByRole("listitem");
  fireEvent.click(addButton);
  const newList = screen.getAllByRole("listitem");
  expect(newList).toHaveLength(oldList.length + 1);
});

test("remove button removes item", () => {
  render(<App />);
  const remButton = screen.getByTestId("rem-button");

  const oldList = screen.getAllByRole("listitem");
  fireEvent.click(remButton);
  const newList = screen.getAllByRole("listitem");
  expect(newList).toHaveLength(oldList.length - 1);
});

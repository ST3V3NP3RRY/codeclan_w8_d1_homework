import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should be able to add 1 and 4 and get 5", () => {
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const addBtn = container.getByTestId("operator-add");
    fireEvent.click(addBtn);
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    const equalBtn = container.getByTestId("operator-equals");
    fireEvent.click(equalBtn);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should be able to subtract 4 and 7 and get 3", () => {
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const subtractBtn = container.getByTestId("operator-subtract");
    fireEvent.click(subtractBtn);
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    const equalBtn = container.getByTestId("operator-equals");
    fireEvent.click(equalBtn);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should be able to multiply 3 by 5 and get 15", () => {
    const button3 = container.getByTestId("number3");
    fireEvent.click(button3);
    const multiplyBtn = container.getByTestId("operator-multiply");
    fireEvent.click(multiplyBtn);
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    const equalBtn = container.getByTestId("operator-equals");
    fireEvent.click(equalBtn);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("15");
  });

  it("should be able to divide 21 by 7 and get 3", () => {
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const divideBtn = container.getByTestId("operator-divide");
    fireEvent.click(divideBtn);
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const equalBtn = container.getByTestId("operator-equals");
    fireEvent.click(equalBtn);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should be able to concatenate multiple number button clicks", () => {
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const button3 = container.getByTestId("number3");
    fireEvent.click(button3);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("123");
  });

  it("should be able to chain multiple operations together", () => {
    const button6 = container.getByTestId("number6");
    fireEvent.click(button6);
    const divideBtn = container.getByTestId("operator-divide");
    fireEvent.click(divideBtn);
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const multiplyBtn = container.getByTestId("operator-multiply");
    fireEvent.click(multiplyBtn);
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    const subtractBtn = container.getByTestId("operator-subtract");
    fireEvent.click(subtractBtn);
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    const equalBtn = container.getByTestId("operator-equals");
    fireEvent.click(equalBtn);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("11");
  });

  it("should be able to clear the running total without affecting the calculation", () => {
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    const addBtn = container.getByTestId("operator-add");
    fireEvent.click(addBtn);
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    const clearBtn = container.getByTestId("clear");
    fireEvent.click(clearBtn);
    const equalBtn = container.getByTestId("operator-equals");
    fireEvent.click(equalBtn);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("14");
  });
});

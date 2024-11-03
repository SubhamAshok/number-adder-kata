import { fireEvent, render, screen } from "@testing-library/react";
import Adder from "src/app/components/adder";



describe("Adder", () => {
  
  describe("sums multiple numbers", () => {
    it('when delimiter and numbers are both valid', () => {
      render(<Adder />);
      const delimiter = screen.getByTestId("delimiter")
      const numbersString = screen.getByTestId("numbersString")
      const submitButton = screen.getByTestId("submitButton")
      const result = screen.getByTestId("result")
      
      fireEvent.change(delimiter, { target: {value : ','}})
      fireEvent.change(numbersString, { target: {value : '1,5,9,'}})
      fireEvent.click(submitButton)
      
      expect(result).toHaveTextContent('15');
    })
  });
});

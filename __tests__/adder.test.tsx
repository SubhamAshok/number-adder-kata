import { fireEvent, render, screen } from "@testing-library/react";
import Adder from "src/app/components/adder";



describe("Adder", () => {
  describe("sums multiple numbers", () => {
    let delimiter:HTMLElement, numbersString: HTMLElement, submitButton: HTMLElement, result: HTMLElement;
    beforeEach(()=>{
      render(<Adder />);
      delimiter = screen.getByTestId("delimiter")
      numbersString = screen.getByTestId("numbersString")
      submitButton = screen.getByTestId("submitButton")
      result = screen.getByTestId("result")
      
    })

    it('when delimiter and numbers are both valid', () => {
      fireEvent.change(delimiter, { target: {value : ','}})
      fireEvent.change(numbersString, { target: {value : '1,5,9,'}})
      fireEvent.click(submitButton)
      
      expect(result).toHaveTextContent('15');
    })

    it('when negative numbers passed in list', () => {
      fireEvent.change(delimiter, { target: {value : '#'}})
      fireEvent.change(numbersString, { target: {value : '1#-5#-3#9#'}})
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      fireEvent.click(submitButton)
      expect(window.alert).toHaveBeenCalledWith("negative numbers not allowed: -5,-3")
      expect(result).toHaveTextContent('0');
    })

    it('when numbers are separated by a new line', () => {      
      fireEvent.change(delimiter, { target: {value : '#'}})
      fireEvent.change(numbersString, { target: {value : '1\n5\n3#9#'}})
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      fireEvent.click(submitButton)
      expect(window.alert).not.toHaveBeenCalledWith()
      expect(result).toHaveTextContent('18');
    })

    it('when wrong delimiter is passed', () => {      
      fireEvent.change(delimiter, { target: {value : ','}})
      fireEvent.change(numbersString, { target: {value : '1#5#9#'}})
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      fireEvent.click(submitButton)
      expect(window.alert).toHaveBeenCalledWith("Uh Oh! seems the input is not quite right")
      expect(result).toHaveTextContent('0');
    })

    it('when delimiter is blank and numbers string is valid', () => {      
      fireEvent.change(delimiter, { target: {value : ''}})
      fireEvent.change(numbersString, { target: {value : '1,5,9,'}})

      jest.spyOn(window, 'alert').mockImplementation(() => {});
      fireEvent.click(submitButton)
      expect(window.alert).toHaveBeenCalledWith("Uh Oh! seems the input is not quite right")
      expect(result).toHaveTextContent('0');
    })

    it('when delimiter is not blank and numbers string is blank', () => {
      fireEvent.change(delimiter, { target: {value : ','}})
      fireEvent.change(numbersString, { target: {value : ''}})

      jest.spyOn(window, 'alert').mockImplementation(() => {});
      fireEvent.click(submitButton)
      expect(window.alert).toHaveBeenCalledWith("Uh Oh! seems the input is not quite right")
      expect(result).toHaveTextContent('0');
    })
  });
});

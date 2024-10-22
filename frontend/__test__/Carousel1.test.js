import { render, screen } from "@testing-library/react";
import CarouselComponent from "../components/CarouselComponent";
import "@testing-library/jest-dom/"; // for extra matchers like toBeInTheDocument

describe("CarouselComponent", () => {
  test("renders the carousel items correctly", () => {
    render(<CarouselComponent />);

    //checks each image in the carousel is displayed 
    const partitionImage = screen.getByAltText("UN Partition");
    const warImage = screen.getByAltText("6 Day War");

    expect(partitionImage).toBeInTheDocument();
    expect(warImage).toBeInTheDocument();

    // check caption under the carousel images
    expect(
      screen.getByText("1947: The United Nations divides Palestine")
    ).toBeInTheDocument();
    expect(
      screen.getByText("1967: 6-day War against Israel over West Bank and Gaza")
    ).toBeInTheDocument();
  });
});

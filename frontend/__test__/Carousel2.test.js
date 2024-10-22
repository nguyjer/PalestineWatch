import { render, screen } from "@testing-library/react";
import CarouselComponent from "../components/CarouselComponent";
import "@testing-library/jest-dom/"; // for extra matchers like toBeInTheDocument

describe("CarouselComponent", () => {
  test("renders the carousel items correctly", () => {
    render(<CarouselComponent />);

    //checks each image in the carousel is displayed
    const campDavidImage = screen.getByAltText("Camp David");
    const massacreImage = screen.getByAltText("Passover Massacre");
    const hamasImage = screen.getByAltText("Israel-Hamas Conflict");


    expect(campDavidImage).toBeInTheDocument();
    expect(massacreImage).toBeInTheDocument();
    expect(hamasImage).toBeInTheDocument();

    // check caption under the carousel images
    expect(
      screen.getByText("2000: President Clinton hosts peace talks")
    ).toBeInTheDocument();
    expect(
      screen.getByText("2002: Terrorist attack kills 30 Israelis")
    ).toBeInTheDocument();
    expect(
      screen.getByText("2021: Conflict between Gaza and Israel escalates")
    ).toBeInTheDocument();
  });
});

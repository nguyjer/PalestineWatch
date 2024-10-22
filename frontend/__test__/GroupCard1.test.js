import { render, screen } from "@testing-library/react";
import SupportCard from "../components/SupportGroupCard";
import "@testing-library/jest-dom/"; 

describe("SupportCard Component", () => {
  const defaultProps = {
    id: 1,
    groupName: "Test Support Group",
    groupEmail: "test@example.com",
    groupCity: "Test City",
    groupState: "TS",
    groupZipCode: "12345",
    groupLink: "https://test.com",
    groupImageURL: "https://test.com/image.jpg",
  };

  test("renders with all props", () => {
    render(<SupportCard {...defaultProps} />);

    // Check that the component renders the group's name
    expect(screen.getByText(/Test Support Group/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: test@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/City: Test City/i)).toBeInTheDocument();
    expect(screen.getByText(/State: TS/i)).toBeInTheDocument();
    expect(screen.getByText(/Zip Code: 12345/i)).toBeInTheDocument();
    expect(screen.getByText(/Link to Website/i)).toHaveAttribute(
      "href",
      "https://test.com"
    );
  });
});

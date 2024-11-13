// components/SupportCard.test.js

import { render, screen } from "@testing-library/react";
import SupportCard from "../components/SupportGroupCard";
import "@testing-library/jest-dom/"; // for the additional matchers

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

  test("renders with missing email, city, state, zip code, and link and renders read more", () => {
    const props = {
      ...defaultProps,
      groupEmail: undefined,
      groupCity: undefined,
      groupState: undefined,
      groupZipCode: undefined,
      groupLink: undefined,
    };
    render(<SupportCard {...props} />);

    expect(screen.getByText(/Email: Missing Data/i)).toBeInTheDocument();
    expect(screen.getByText(/City: Missing Data/i)).toBeInTheDocument();
    expect(screen.getByText(/State: Missing Data/i)).toBeInTheDocument();
    expect(screen.getByText(/Zip Code: Missing Data/i)).toBeInTheDocument();
    const readMoreLink = screen.getByRole("link", { name: /Read More/i });
    expect(readMoreLink).toHaveAttribute("href", "/support-groups/1");
  });
});

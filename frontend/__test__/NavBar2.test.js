import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

// Mock the useRouter hook from Next.js
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NavBar", () => {
  beforeEach(() => {
    // Mock the return value of useRouter
    useRouter.mockReturnValue({
      pathname: "/about", // Default path for testing the active link
    });
  });

  test("marks the correct link as active based on the current route", () => {
    // Render the NavBar component again with mock pathname '/about'
    render(<NavBar />);

    // Check if the 'About' link has the active class
    const aboutLink = screen.getByText("About");
    expect(aboutLink).toHaveClass("active");

    // Other links should not have the active class
    const newsLink = screen.getByText("News");
    expect(newsLink).not.toHaveClass("active");

    const groupsLink = screen.getByText("Support Groups");
    expect(groupsLink).not.toHaveClass("active");

    const countriesLink = screen.getByText("Countries");
    expect(countriesLink).not.toHaveClass("active");
  });
});

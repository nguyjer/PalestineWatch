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

  test("renders the NavBar with correct links", () => {
    render(<NavBar />);

    // Check if the brand name is in the document
    expect(screen.getByText(/PalestineWatch/i)).toBeInTheDocument();

    // Check if the expected links are present
    const links = [
      { text: "About", href: "/about" },
      { text: "News", href: "/news" },
      { text: "Support Groups", href: "/support-groups" },
      { text: "Countries", href: "/countries" },
    ];

    // Loop through the links and check if they are rendered correctly
    links.forEach((link) => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toBeInTheDocument();
      expect(navLink.closest("a")).toHaveAttribute("href", link.href);
    });
  });
});

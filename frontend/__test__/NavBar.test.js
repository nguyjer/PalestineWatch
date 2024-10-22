import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar"; // Adjust the import path according to your file structure

describe("NavBar", () => {
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

    links.forEach((link) => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toBeInTheDocument();
      expect(navLink.closest("a")).toHaveAttribute("href", link.href);
    });
  });
});

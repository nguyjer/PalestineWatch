import { render, screen, waitFor } from "@testing-library/react"; // Import waitFor for async operations
import About from "../pages/about";
import "@testing-library/jest-dom";

jest.mock("next/head", () => {
  return ({ children }) => <>{children}</>;
});

// Mocking the global fetch for API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
);

describe("About Page", () => {

  test("renders the TotalStats component with initial stats", async () => {
    const mockStats = { issues: 5, commits: 10, utests: 15 };

    render(<About stats={mockStats} />);

    // Use a function matcher to handle text that might be broken up
    const totalIssuesText = screen.getByText(
      (content, element) =>
        content.startsWith("Total No. of Issues:") &&
        element.tagName.toLowerCase() === "p"
    );
    expect(totalIssuesText).toBeInTheDocument();

    // Optionally check the specific number of issues
    waitFor(() => {
      expect(
        screen.getByText(`Total No. of Issues: ${mockStats.issues}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Total No. of Commits: ${mockStats.commits}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Total No. of Unit Tests: ${mockStats.utests}`)
      ).toBeInTheDocument();
    });
  });
});

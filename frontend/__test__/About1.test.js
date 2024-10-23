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
  test("renders the About page and displays key information", async () => {
    render(<About />); // Render the About component

    // Wait for the component to be updated and assert that key information is displayed
    await waitFor(() => {
      expect(screen.getByText("Our Mission")).toBeInTheDocument();
      expect(
        screen.getByText(
          /Welcome to Palestine Watch! The purpose of this website/i
        )
      ).toBeInTheDocument();
      expect(screen.getByText("Members")).toBeInTheDocument();
      expect(screen.getByText("Aryan Samal")).toBeInTheDocument();
      expect(screen.getByText("Jeremy Nguyen")).toBeInTheDocument();
      expect(screen.getByText("Kenny Nguyen")).toBeInTheDocument();
      expect(screen.getByText("Gitlab Repository")).toBeInTheDocument();
      expect(screen.getByText("Postman API")).toBeInTheDocument();
      expect(screen.getByText("Docker")).toBeInTheDocument();
      expect(screen.getByText("AWS")).toBeInTheDocument();
      expect(screen.getByText("Bootstrap")).toBeInTheDocument();
      expect(screen.getByText("Axios")).toBeInTheDocument();
    });
  });

});

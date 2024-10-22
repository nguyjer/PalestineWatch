// __tests__/about.test.js
import { render, screen } from "@testing-library/react";
import About from "../pages/about";
import "@testing-library/jest-dom"; 

jest.mock("next/head", () => {
  return ({ children }) => <>{children}</>;
});

// window.fetch used for fetching commits and issues from the GitLab API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]), 
  })
);

describe("About Page", () => {
  it("renders the About page and displays key information", async () => {
    render(<About />);

    // Test for the main heading
    expect(screen.getByText("Our Mission")).toBeInTheDocument();

    // Test for the mission statement
    expect(
      screen.getByText(
        /Welcome to Palestine Watch! The purpose of this website/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Members")).toBeInTheDocument();
    expect(screen.getByText("Aryan Samal")).toBeInTheDocument();
    expect(screen.getByText("Jeremy Nguyen")).toBeInTheDocument();
    expect(screen.getByText("Kenny Nguyen")).toBeInTheDocument();

    // Test for links
    expect(screen.getByText("Gitlab Repository")).toBeInTheDocument();
    expect(screen.getByText("Postman API")).toBeInTheDocument();
  });

  it("renders the Tools section", () => {
    render(<About />);

    // Test for Tools section and some tool descriptions
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Bootstrap")).toBeInTheDocument();
    expect(screen.getByText("Axios")).toBeInTheDocument();
  });

  it("renders the TotalStats component with initial stats", () => {
    render(<About />);

    // Test the stats rendering with initial values
    expect(screen.getByText(/Total No. of Issues/i)).toBeInTheDocument();
    expect(screen.getByText("Total No. of Issues: 0")).toBeInTheDocument();
    expect(screen.getByText("Total No. of Commits: 0")).toBeInTheDocument();
    expect(screen.getByText("Total No. of Unit Tests: 0")).toBeInTheDocument();
  });
});

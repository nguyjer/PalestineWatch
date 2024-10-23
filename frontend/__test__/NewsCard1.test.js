// components/NewsCard.test.js

import { render, screen } from "@testing-library/react";
import NewsCard from "../components/NewsCard";
import "@testing-library/jest-dom/"; // for additional matchers

describe("NewsCard Component", () => {
  const defaultProps = {
    articleId: 1,
    title: "Breaking News",
    description: "This is a description of the news article.",
    imageUrl: "https://example.com/image.jpg",
    author: "John Doe",
    publishedAt: "2023-10-22T12:00:00Z",
    source: "News Source",
  };

  test("renders with all props", () => {
    render(<NewsCard {...defaultProps} />);

    // Check that the component renders the article title
    expect(screen.getByText(/Breaking News/i)).toBeInTheDocument();
    expect(
      screen.getByText(/This is a description of the news article./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/By John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/10\/22\/2023/i)).toBeInTheDocument(); // Check formatted date
  });
});

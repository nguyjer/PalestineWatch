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

  test("renders with missing image, author, different published date, and read more button", () => {
    const props = {
      ...defaultProps,
      author: undefined,
      imageUrl: undefined,
      publishedAt: "2024-01-01T06:00:00Z",
    };
    render(<NewsCard {...props} />);

    // Check for the placeholder image
    const img = screen.getByAltText(/Breaking News image/i);
    expect(img).toHaveAttribute("src", "/placeholder-image.jpg");
    expect(screen.getByText(/By Unknown \| d+\/d+\/2024/i)).toBeInTheDocument();

    const readMoreLink = screen.getByRole("link", { name: /Read More/i });
    expect(readMoreLink).toHaveAttribute("href", "/news/1");
  });
});

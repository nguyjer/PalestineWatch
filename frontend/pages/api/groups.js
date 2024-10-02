import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    console.log("Fetching groups from USCPR website");
    const { data } = await axios.get(
      "https://uscpr.org/connect-with-a-local-group/"
    );

    if (!data) {
      throw new Error("No data returned from the request");
    }
    // console.log(data);
    // console.log("Response data:", data); // Log the response data
    console.log(cheerio);
    const $ = cheerio.load(data);
    console.log("Cheerio loaded");
    const groups = [];
    $(".row-hover tr").each((index, element) => {
      const groupName = $(element).find(".column-1").text().trim();
      const groupEmail = $(element).find(".column-2 a").text().trim();
      const groupCity = $(element).find(".column-4").text().trim();
      const groupState = $(element).find(".column-5").text().trim();
      const groupZipCode = $(element).find(".column-6").text().trim();
      const groupLink = $(element).find(".column-3").text().trim();

      groups.push({
        id: index,
        name: groupName,
        email: groupEmail,
        city: groupCity,
        state: groupState,
        zipCode: groupZipCode,
        link: groupLink,
      });
    });
    console.log("Groups fetched:", groups);
    res.status(200).json(groups);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}

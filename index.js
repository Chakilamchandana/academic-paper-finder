import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8000;
const API_URL = "https://api.exa.ai/search";
const apiKey = "a591ac39-8984-42f5-9abd-24fcc250cf07";

// Serve static files from the 'public' directory.
app.use(express.static("public"));

// Parse URL-encoded and JSON bodies for incoming requests.
app.use(bodyParser.urlencoded({ extended: true }));

// For parsing JSON bodies
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contributors", (req, res) => {
  res.render("contributors.ejs");
});

app.post("/get-academic-papers", async (req, res) => {
  try {
    const { choiceInput, authorInput, publicationInput } = req.body;

    console.log("Request Body:", req.body);
    console.log("choiceInput:", choiceInput);
    console.log("authorInput:", authorInput);
    console.log("publicationInput:", publicationInput);

    //Validate inputs
    if (!choiceInput) {
      throw new Error("Missing choice field");
    }

    const publicationInputString = Array.isArray(publicationInput)
      ? publicationInput.join(", ")
      : publicationInput;

    // Building the query
    let query = `Find new academic research papers on ${choiceInput}`;
    if (authorInput) {
      query += `by ${authorInput}`;
    }
    if (publicationInputString) {
      query += `in the category of ${publicationInputString}`;
    }

    //Triggering the API
    const options = {
      method: "POST",
      url: API_URL,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": apiKey,
      },
      data: {
        query: query,
        category: "research paper",
        numResults: 7,
        type: "neural",
      },
    };
    console.log("Sending query:", query);
    const response = await axios.request(options);
    const apiData = response.data;

    //Retrieving results from API response and rendering results
    console.log("API Response:", apiData);
    res.render("results.ejs", { apiData });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res
      .status(500)
      .send("Sorry, there has been an error with the server. Try again later.");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

# Academic Paper Finder

This project is a specialized search engine that helps users find academic papers on specific topics. It utilizes the Exa API to provide relevant academic papers based on user inputs. The application is built using Node.js and Express, and it includes an Embedded JS with HTML form for user input.

**Features**
Users can search for academic papers based on topic, author, and type of publication.
Supports multiple types of publications including journal articles, conference papers, theses, dissertations, and preprints.
Integrates with the Exa API to retrieve up-to-date and relevant academic papers.

## How It Differs from a Usual Google Search

While a general Google search provides a wide range of results, often including non-academic sources, advertisements, and less relevant content, this specialized academic paper finder focuses specifically on academic publications. This ensures that users receive highly relevant and authoritative results, making it an invaluable tool for researchers, students, and academics.

**Prerequisites**

1. Node.js (version 14 or higher recommended)
2. npm (Node Package Manager)
3. An external API key (e.g., from api.exa.ai)
4. Installation
5. Clone the repository

**bash**

1. git clone https://github.com/Chakilamchandana/academic-paper-finder.git
2. cd academic-paper-finder
3. Install dependencies using npm i

**Set up environment variables**
Create a .env file in the root directory and add your API key and other necessary configuration:

1. API_URL=https://api.exa.ai/search
2. API*KEY=\_yourAPIKey*
3. PORT=8000
4. Running the Application

**Start the server**

1. npm start

**Access the application**

1. Open your web browser and navigate to http://localhost:8000.

**API Endpoints**

1. Homepage  
   GET /
   Renders the homepage.

2. About Page  
   GET /about  
   Renders the about page.

3. Contributors Page  
   GET /contributors  
   Renders the contributors page.

4. Job Search  
   POST /get-academic-papers  
   Handles academic research paper queries.

**Acknowledgement**  
Thanks to the creators of the [exa.ai API](https://dashboard.exa.ai/playground/search) for providing the API.

const { execSync } = require("child_process");

const apiClients = [
  // Custom API created here: https://github.com/jackkoppa/gs-spring-boot
  {
    name: "candidate",
    spec: "https://typesafe-api-demo-java.herokuapp.com/v2/api-docs"
    // For generating locally
    //spec: "http://localhost:8080/v2/api-docs"
  },
  // Movie reviews API, with auth info here: https://developer.nytimes.com/get-started
  {
    name: "timesmovies",
    spec:
      "https://any-api.com/openapi/nytimes_com_movie_reviews.2_0_0.openapi.json"
  }

  // Documentation for OAuth is not standardized, making it difficult to set accessToken
  // {
  //   name: "spotify",
  //   spec: "https://any-api.com/openapi/spotify_com.v1.openapi.json"
  // },

  // Too much of a hassle to pass authentication apiKey in query, given improper documentation
  // {
  //   name: "omdb",
  //   spec: "https://any-api.com/openapi/omdbapi_com.1.openapi.json"
  // },

  // Too large of a generated file, for now
  // {
  //   name: "fecgov",
  //   spec: "https://any-api.com/openapi/fec_gov.1_0.openapi.json"
  // },
];

function generateApiClients() {
  apiClients.forEach(client => {
    console.log(`Generating API Client for ${client.name}`);
    const generate = execSync(
      `npx openapi-generator generate -i ${client.spec} -o ./src/api/${client.name} -g typescript-axios -c ./build/openapiConfig.json`
    );
    console.log(
      generate.toString(),
      `\n\nSuccessfully generated API Client for ${client.name}`
    );
  });
}

generateApiClients();

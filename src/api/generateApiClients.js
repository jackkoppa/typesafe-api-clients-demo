const { execSync } = require("child_process");

const apiClients = [
  {
    name: "spotify",
    spec: "https://any-api.com/openapi/spotify_com.v1.openapi.json"
  },
  {
    name: "omdb",
    spec: "https://any-api.com/openapi/omdbapi_com.1.openapi.json"
  },
  {
    name: "fecgov",
    spec: "https://any-api.com/openapi/fec_gov.1_0.openapi.json"
  }
];

function generateApiClients() {
  apiClients.forEach(client => {
    console.log(`Generating API Client for ${client.name}`);
    const generate = execSync(
      `npx openapi-generator generate -i ${client.spec} -o ./src/api/${client.name} -g typescript-axios`
    );
    console.log(
      generate.toString(),
      `\n\nSuccessfully generated API Client for ${client.name}`
    );
  });
}

generateApiClients();

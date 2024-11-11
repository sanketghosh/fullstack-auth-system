import swaggerAutoGen from "swagger-autogen";

const doc = {
  info: {
    title: "auth system",
    description: "API documentation for an auth system",
  },
  host: "localhost:8000",
  basePath: "/api/v1/",
};

const outputFile = "./swagger.json";
const routes = [];

swaggerAutoGen()(outputFile, routes, doc);

import swaggerAutoGen from "swagger-autogen";

const doc = {
  info: {
    title: "Full Stack Authentication System",
    description: "API documentation for an full stack authentication system",
  },
  host: "localhost:8000",
  basePath: "/api/v1/",
};

const outputFile = "./swagger.json";
const routes = [
  "./modules/health-check.ts"
];

swaggerAutoGen()(outputFile, routes, doc);

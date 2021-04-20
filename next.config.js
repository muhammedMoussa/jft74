const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  assetPrefix:
    ghPages && process.env.NODE_ENV === "production" ? "/jft74/" : "",
  env: {
    BACKEND_URL: "/jft74",
  },
  basePath: ghPages && process.env.NODE_ENV === "production" ? "/jft74/" : "",
};

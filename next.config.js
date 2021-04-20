const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  //   assetPrefix: ghPages ? '/jft74.github.io/' : ''   // customize this value,
  assetPrefix: "/jft74/",
  env: {
    BACKEND_URL: "/jft74",
  },
  basePath: "/jft74",
};

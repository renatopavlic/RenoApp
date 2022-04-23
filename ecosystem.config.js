module.exports = {
  apps: [
    {
      name: "Reno App",
      script: "./src/deploy.js",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: ["reno-server"], // naziv iz configa
      ref: "origin/master",
      repo: "git@github.com:renatopavlic/RenoApp.git",
      path: "/home/moji-projekti/RenoApp", // automatski ce kreirati folder
      "pre-deploy": "git fetch --all",
      "post-setup": "yarn && yarn start",
      "post-deploy": "yarn && yarn start",
    },
  },
};

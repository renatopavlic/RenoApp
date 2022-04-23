module.exports = {
  apps: [
    {
      name: "Reno App",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
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

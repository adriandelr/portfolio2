const fs = require("fs");
const path = require("path");
const ghpages = require("gh-pages");

// Manually create an empty gitignore file to unignore node_modules
const filePath = path.join(__dirname, "dist", ".gitignore");
fs.writeFileSync(filePath, "");

ghpages.publish(
  "dist",
  {
    add: true,
    dotfiles: true,
    nojekyll: true,
    branch: "gh-pages",
    repo: "https://github.com/adriandelr/portfolio2.git",
  },
  (err: any) => {
    if (err) {
      console.error("Error during deployment:", err);
    } else {
      console.log("Deployment successful!");
    }
  }
);

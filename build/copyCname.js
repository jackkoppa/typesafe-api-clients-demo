const { copyFileSync } = require("fs");

try {
  copyFileSync("./build/CNAME", "./dist/CNAME");
} catch (error) {
  console.warn("failed to copy CNAME", error);
}

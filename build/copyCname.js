const { copyFileSync } = require("fs");

try {
  console.log("copying CNAME");
  copyFileSync("./build/CNAME", "./dist/CNAME");
} catch (error) {
  console.warn("failed to copy CNAME", error);
}

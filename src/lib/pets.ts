import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "pets");

export function getAllPetIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  console.log("meow");
  console.log(fileNames);
}

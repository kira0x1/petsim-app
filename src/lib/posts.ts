import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

interface MetaData {
  title: string;
  date: string;
}

export function getSortedPostsData() {
  // Get file name under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove file extension from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse metadata from posts using gray matter
    const metadata = matter(fileContents);

    // Combine the data with the id

    const result: { id: string; date: string; title: string } = {
      id: id,
      date: metadata.data.date,
      title: metadata.data.title,
    };

    return result;
  });

  return allPostsData.sort((a: MetaData, b: MetaData) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

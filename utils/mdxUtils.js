import fs from "fs";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const folderPath = (folder) =>
  path.join(process.cwd(), `data/${folder}`);

export const filesPath = (modelPath) =>
  fs.readdirSync(modelPath).filter((path) => /\.mdx?$/.test(path));

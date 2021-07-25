import fs from "fs";
import path from "path";

export const folderPath = (folder) =>
  path.join(process.cwd(), `data/${folder}`);

export const filesPath = (modelPath) =>
  fs.readdirSync(modelPath).filter((path) => /\.mdx?$/.test(path));

import { readdirSync } from "fs";

function listDirectoryContentsSync(directory: string): void {
  try {
    const files = readdirSync(directory);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.error("Error reading directory:", error);
  }
}

// Usage
listDirectoryContentsSync("./path/to/directory");

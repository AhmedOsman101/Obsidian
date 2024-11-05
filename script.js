const fs = require("fs");
const path = require("path");

// Paths
const rootDir = "./src"; // Change this to the directory you want to traverse
const outputJsonPath = "./data.json";

// Initialize data storage
let jsonData = [];

// Function to check if a directory contains Markdown files
function hasMarkdownFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  return (
    files.some((file) => file.endsWith(".md")) ||
    files.every((file) => fs.statSync(path.join(dirPath, file)).isDirectory())
  );
}

// Recursive function to collect .md files' data and create index.md
function processDirectory(dirPath) {
  let entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let mdFiles = [];
  let subDirs = [];

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
      const label = path.basename(entry.name, ".md");
      mdFiles.push({ name: entry.name, path: entryPath, label });
      jsonData.push({ name: entry.name, path: entryPath, label });
    } else if (entry.isDirectory() && hasMarkdownFiles(entryPath)) {
      subDirs.push(entry.name);
      processDirectory(entryPath);
    }
  }

  // If markdown files exist in the current directory, create/update the index.md file
  if (mdFiles.length > 0 || subDirs.length > 0) {
    const indexPath = path.join(dirPath, "index.md");
    let content = `# ${path.basename(dirPath)}\n\n`;

    if (subDirs.length > 0) {
      content += "## Subdirectories\n\n";
      subDirs.forEach((subDir) => {
        content += `- [${subDir}](${subDir}/index.md)\n`;
      });
    }

    if (mdFiles.length > 0) {
      content += "\n## Files\n\n";
      mdFiles.forEach((file) => {
        content += `- [${file.label}](${file.name})\n`;
      });
    }

    fs.writeFileSync(indexPath, content, "utf8");
    console.log(`Created/Updated: ${indexPath}`);
  }
}

// Run the script
try {
  console.log("Processing directories...");
  processDirectory(rootDir);
  fs.writeFileSync(outputJsonPath, JSON.stringify(jsonData, null, 2), "utf8");
  console.log(`Markdown file data saved to ${outputJsonPath}`);
} catch (error) {
  console.error("Error:", error);
}

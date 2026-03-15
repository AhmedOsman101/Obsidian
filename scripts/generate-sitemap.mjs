/**
 * Post-build script to generate sitemap.xml and robots.txt
 * Run after: pnpm build
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

const DIST_DIR = path.join(__dirname, ".vitepress", "dist");
const BASE_URL = "https://obsidian-notes-swart.vercel.app"; // Update if needed

function getAllMdFiles(dir, basePath = "") {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllMdFiles(fullPath, relativePath));
    } else if (item.endsWith(".html")) {
      // Convert .html files to URLs
      let url = relativePath.replace(/\.html$/, "");
      if (url !== "index") {
        url = `/${url}/`;
      } else {
        url = "/";
      }
      files.push(url);
    }
  }

  return files;
}

function generateSitemap() {
  if (!fs.existsSync(DIST_DIR)) {
    console.log("Dist directory not found. Run 'pnpm build' first.");
    return;
  }

  // Get all HTML files
  const pages = getAllMdFiles(DIST_DIR);

  // Generate sitemap.xml
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemap);
  console.log(`Generated sitemap.xml with ${pages.length} pages`);

  // Generate robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.join(DIST_DIR, "robots.txt"), robots);
  console.log("Generated robots.txt");
}

generateSitemap();

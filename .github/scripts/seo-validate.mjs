#!/usr/bin/env node

/**
 * SEO Meta Validation Script
 * Checks: title length, description length, canonical, H1 count, image alts
 * Usage: node seo-validate.mjs <build-dir|src-dir> [...more dirs]
 */

import { readFileSync, existsSync, statSync, readdirSync } from 'fs';
import { join, extname } from 'path';

const ISSUES = [];
const WARNINGS = [];

function logIssue(file, msg) {
  ISSUES.push(`  ❌ ${file}: ${msg}`);
}

function logWarn(file, msg) {
  WARNINGS.push(`  ⚠️  ${file}: ${msg}`);
}

function checkHTML(filePath, content) {
  const lower = content.toLowerCase();
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch) logIssue(filePath, 'Missing <title> tag');
  else {
    const title = titleMatch[1].trim();
    if (title.length === 0) logIssue(filePath, '<title> is empty');
    else if (title.length > 60) logWarn(filePath, `Title ${title.length} chars (recommend ≤60): "${title.slice(0,60)}..."`);
    else console.log(`  ✅ Title: "${title}" (${title.length} chars)`);
  }

  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*\/?>/i)
    || content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*\/?>/i);
  if (!descMatch) logIssue(filePath, 'Missing meta description');
  else {
    const desc = descMatch[1].trim();
    if (desc.length === 0) logIssue(filePath, 'Meta description is empty');
    else if (desc.length > 160) logWarn(filePath, `Description ${desc.length} chars (recommend ≤160)`);
    else if (desc.length < 50) logWarn(filePath, `Description ${desc.length} chars (recommend ≥50)`);
    else console.log(`  ✅ Description: ${desc.length} chars`);
  }

  const canonMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*\/?>/i);
  if (!canonMatch) logIssue(filePath, 'Missing canonical link tag');
  else console.log(`  ✅ Canonical: ${canonMatch[1]}`);

  const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
  const h1Count = h1Matches ? h1Matches.length : 0;
  if (h1Count === 0) logIssue(filePath, 'No H1 tag found');
  else if (h1Count > 1) logIssue(filePath, `Multiple H1 tags (${h1Count})`);
  else {
    const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').trim().slice(0, 80);
    console.log(`  ✅ 1 H1: "${h1Text}"`);
  }

  const imgTags = content.match(/<img[^>]*>/gi) || [];
  let missingAlt = 0;
  for (const img of imgTags) {
    const altMatch = img.match(/\salt\s*=\s*["']([^"']*)["']/i);
    if (!altMatch) {
      missingAlt++;
      const srcMatch = img.match(/\bsrc\s*=\s*["']([^"']*)["']/i);
      const src = srcMatch ? srcMatch[1].slice(0, 60) : '(unknown)';
      if (missingAlt <= 5) logWarn(filePath, `Missing alt: ${src}`);
    }
  }
  if (missingAlt === 0 && imgTags.length > 0)
    console.log(`  ✅ All ${imgTags.length} images have alt`);
  else if (imgTags.length > 0)
    logWarn(filePath, `${missingAlt}/${imgTags.length} images missing alt`);
}

function walkDir(dir, fn) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true }))
    if (entry.isDirectory() && !entry.name.startsWith('.'))
      walkDir(join(dir, entry.name), fn);
    else if (entry.isFile())
      fn(join(dir, entry.name));
}

const args = process.argv.slice(2);
console.log('\n🔍 SEO Meta Validation');
console.log(`Scanning: ${args.join(', ')}`);
console.log('─'.repeat(50));

let htmlFilesFound = 0;
for (const dir of args) {
  if (!existsSync(dir)) { console.log(`  (not found: ${dir})`); continue; }
  walkDir(dir, (fp) => {
    if (extname(fp).toLowerCase() === '.html') {
      htmlFilesFound++;
      console.log(`\n📄 ${fp}`);
      checkHTML(fp, readFileSync(fp, 'utf-8'));
    }
  });
}

console.log(`\n📊 ${htmlFilesFound} HTML files checked`);
console.log(`❌ Issues: ${ISSUES.length}`);
ISSUES.forEach(i => console.log(i));
console.log(`⚠️  Warnings: ${WARNINGS.length}`);
WARNINGS.forEach(w => console.log(w));

if (ISSUES.length > 0) { console.log('🔴 ISSUES FOUND'); process.exit(1); }
else { console.log('✅ All SEO checks passed'); process.exit(0); }

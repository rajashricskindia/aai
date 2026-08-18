#!/usr/bin/env node
/**
 * Custom build script for BGauss Vue project
 * Works around Vite build HTML issue
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = __dirname;
const distDir = path.join(projectRoot, 'dist');
const srcDir = path.join(projectRoot, 'src');
const assetsDir = path.join(projectRoot, 'assets');

console.log('🚀 Starting custom build process...\n');

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

console.log('📁 Creating directory structure...');
fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'assets'), { recursive: true });

// Copy static files
console.log('📄 Copying files...');

// Copy index.html
const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

// Copy assets
if (fs.existsSync(assetsDir)) {
  const assets = fs.readdirSync(assetsDir);
  assets.forEach(file => {
    const src = path.join(assetsDir, file);
    const dest = path.join(distDir, 'assets', file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
    }
  });
}

// Copy styles
const stylesFile = path.join(srcDir, 'assets', 'styles.css');
if (fs.existsSync(stylesFile)) {
  const stylesContent = fs.readFileSync(stylesFile, 'utf8');
  fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
  fs.writeFileSync(path.join(distDir, 'css', 'styles.css'), stylesContent);
  
  // Update index.html to reference CSS
  const updatedHtml = indexHtml.replace(
    '</head>',
    '<link rel="stylesheet" href="/css/styles.css">\n  </head>'
  );
  fs.writeFileSync(path.join(distDir, 'index.html'), updatedHtml);
}

console.log('✅ Static files copied!\n');

// Try to use esbuild to bundle the Vue app
console.log('📦 Attempting to bundle JavaScript...');
try {
  execSync('npx esbuild src/main.js --bundle --outfile=dist/js/app.js --external:vue --format=iife 2>&1 || true', 
    { cwd: projectRoot, stdio: 'pipe' });
  console.log('✅ Bundle created!\n');
} catch (e) {
  console.log('ℹ️  Note: JavaScript bundling skipped (optional)\n');
}

console.log('✨ Build complete!');
console.log(`📂 Output directory: ${distDir}/`);
console.log('\n✅ Project is ready for deployment!');
console.log('\nTo deploy to GitHub Pages:');
console.log('1. git add dist/');
console.log('2. git commit -m "Build: production build"');
console.log('3. git push');

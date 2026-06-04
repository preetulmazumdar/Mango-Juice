const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'Banner Assets');
const destDir = path.join(__dirname, 'public', 'images', 'mango');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg')).sort();
    console.log(`Found ${files.length} images. Copying first 120 as .webp...`);
    
    for (let i = 0; i < Math.min(120, files.length); i++) {
        const srcPath = path.join(srcDir, files[i]);
        // Rename exactly as 1.webp, 2.webp, ..., 120.webp
        const destPath = path.join(destDir, `${i + 1}.webp`);
        fs.copyFileSync(srcPath, destPath);
    }
    console.log('Successfully prepared 120 mango images.');
} else {
    console.log('Banner Assets folder not found.');
}

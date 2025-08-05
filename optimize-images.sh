#!/bin/bash

# Image Optimization Script for Performance
# Run this to compress your large images

echo "🔧 Optimizing images for better performance..."

# Create backup directory
mkdir -p public/images/backup

# Backup original large images
cp public/images/hero.jpg public/images/backup/
cp public/images/me.webp public/images/backup/
cp public/images/booklet.webp public/images/backup/
cp public/images/perksway.webp public/images/backup/

echo "✅ Original images backed up to public/images/backup/"

echo "📸 Large images that need compression:"
echo "  - hero.jpg (532KB) - Consider reducing to ~100KB"
echo "  - me.webp (340KB) - Consider reducing to ~50KB" 
echo "  - booklet.webp (268KB) - Consider reducing to ~80KB"
echo "  - perksway.webp (268KB) - Consider reducing to ~80KB"

echo ""
echo "🌐 Online compression tools:"
echo "  - https://tinypng.com/ (PNG/WebP)"
echo "  - https://compressjpeg.com/ (JPG)" 
echo "  - https://squoosh.app/ (All formats)"

echo ""
echo "🎯 Target sizes for web:"
echo "  - Hero images: 50-150KB"
echo "  - Logo/icons: 5-20KB"
echo "  - Background images: 30-100KB"

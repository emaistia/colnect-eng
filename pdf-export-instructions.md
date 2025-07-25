# How to Export as PDF

## Method 1: Browser Print (Recommended)

1. **Open the HTML file** (`colnect-design-documentation.html`) in your web browser
2. **Press Ctrl+P** (Windows/Linux) or **Cmd+P** (Mac) to open print dialog
3. **Select "Save as PDF"** as the destination
4. **Configure print settings:**
   - Paper size: A4 or Letter
   - Margins: Minimum or Custom (0.5 inch)
   - Scale: 100%
   - Options: ✅ Background graphics
5. **Click "Save"** and choose your filename

## Method 2: Online PDF Converters

### Option A: HTML to PDF Online Tools
- **WeasyPrint Online:** Upload HTML file for professional PDF conversion
- **PDFShift:** High-quality HTML to PDF conversion
- **HTML/CSS to PDF API:** For automated conversion

### Option B: Markdown to PDF
- **Pandoc:** `pandoc design-documentation.md -o colnect-design.pdf`
- **Markdown PDF (VS Code):** Install extension and export
- **GitBook:** Import markdown and export as PDF

## Method 3: Professional Tools

### Adobe Acrobat
1. Open Adobe Acrobat Pro
2. Choose "Create PDF" → "From Web Page"
3. Enter the local file path or upload HTML
4. Configure page settings and export

### Puppeteer (Programmatic)
\`\`\`javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///path/to/colnect-design-documentation.html');
  await page.pdf({
    path: 'colnect-design-documentation.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    }
  });
  await browser.close();
})();
\`\`\`

## Recommended Settings for Best Results

### Print Settings
- **Paper:** A4 (210 × 297 mm)
- **Orientation:** Portrait
- **Margins:** 15-20mm all sides
- **Scale:** 100% (no shrinking)
- **Background:** Include background colors and images
- **Headers/Footers:** None (document has its own)

### Quality Settings
- **Resolution:** 300 DPI minimum
- **Color:** Full color (not grayscale)
- **Compression:** Medium to High quality
- **Fonts:** Embed all fonts

## File Information

**Generated HTML File:** `colnect-design-documentation.html`
- **Size:** ~50KB
- **Pages:** Approximately 15-20 pages when printed
- **Fonts:** Inter (Google Fonts) - will load automatically
- **Images:** Color swatches and visual elements included
- **Print-optimized:** CSS includes print media queries

## Troubleshooting

### Common Issues:
1. **Missing colors:** Ensure "Background graphics" is enabled
2. **Cut-off content:** Reduce margins or scale to 90%
3. **Font issues:** Internet connection required for Google Fonts
4. **Page breaks:** Content is optimized with page-break classes

### Browser Compatibility:
- ✅ **Chrome/Edge:** Best results with print preview
- ✅ **Firefox:** Good compatibility, check margins
- ⚠️ **Safari:** May need margin adjustments
- ❌ **Internet Explorer:** Not recommended

The HTML file is specifically designed for PDF export with proper page breaks, print-friendly styling, and comprehensive content formatting.

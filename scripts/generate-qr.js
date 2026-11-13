// Standalone QR code generator for Raghav's website
// Usage: node scripts/generate-qr.js <your-vercel-url>
// Example: node scripts/generate-qr.js https://for-raghav.vercel.app

import QRCode from 'qrcode'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const targetUrl = process.argv[2] || 'https://for-raghav.vercel.app'
const outputPath = path.resolve(__dirname, '../raghav-qr-code.png')

console.log(`\n🍷 Generating QR code for: ${targetUrl}`)

QRCode.toFile(
  outputPath,
  targetUrl,
  {
    width: 1024,
    margin: 2,
    color: {
      dark: '#070a14', // Tokyo midnight dark
      light: '#ffffff', // Crisp white background for 100% camera scanning
    },
    errorCorrectionLevel: 'H',
  },
  (err) => {
    if (err) {
      console.error('❌ Failed to generate QR code:', err)
      process.exit(1)
    }
    console.log(`✅ Success! High-resolution QR code saved to:\n   ${outputPath}\n`)
    console.log('📱 Send this image to Raghav. When he scans it, your website will open instantly!\n')
  }
)

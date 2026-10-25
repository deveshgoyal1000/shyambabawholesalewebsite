import fs from 'fs'
import path from 'path'

const filePath = path.resolve('node_modules/@payloadcms/next/dist/layouts/Root/index.js')
if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8')
  if (!content.includes('suppressHydrationWarning: true,\n      children: [/*#__PURE__*/_jsxs(RootProvider')) {
    content = content.replace(
      '/*#__PURE__*/_jsxs("body", {\n      children: [/*#__PURE__*/_jsxs(RootProvider',
      '/*#__PURE__*/_jsxs("body", {\n      suppressHydrationWarning: true,\n      children: [/*#__PURE__*/_jsxs(RootProvider'
    )
    fs.writeFileSync(filePath, content, 'utf8')
    console.log('✓ Patched Payload RootLayout with suppressHydrationWarning on body')
  }
}

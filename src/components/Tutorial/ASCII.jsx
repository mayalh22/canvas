import concept from '../../assets/tutorials/ascii-concept.png'
import result  from '../../assets/tutorials/ascii-result.png'

export default function ASCII() {
  return (
    <div className="rule-list">
      <h2 className="subtitle">Image to ASCII Art with JavaScript</h2>
      <p>ASCII art represents images using text characters. Each character corresponds to a pixel's brightness: dark areas get heavy symbols like '@' and light areas get lighter symbols like '.'. It's a satisfying way to transform photos into text-based artwork. By the end of this tutorial, you'll have a working tool that converts any image into ASCII art directly in your browser!</p>

      <div>
        <h3 className="section-label">Step 1. Understand the concept</h3>
        <p>Images are made of pixels, each with red, green, and blue (RGB) values. We combine these values into a single brightness value. Then we map this brightness to a character in a string ordered from lightest to darkest. When printed in a grid, this creates an ASCII version of the image.</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label">It should <br /> look like this:</p>
  <img src={concept} alt="Photo next to the same image rendered as ASCII characters" style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div>      </div>

      <div>
        <h3 className="section-label">Step 2. Set up your HTML</h3>
        <p>Create a new folder for your project. You can call it <code>ascii-art</code>. Inside, create a file named <code>index.html</code> with the following content:</p>
        <pre><code>{`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #fffaff; display: flex; flex-direction: column; align-items: center; padding: 2rem; }
    pre  { color: #24251d; font-size: 6px; line-height: 1.1; letter-spacing: 2px; font-family: monospace; }
    input { margin: 20px; }
  </style>
</head>
<body>
  <input type="file" id="upload" accept="image/*" />
  <pre id="output"></pre>
  <script src="script.js"></script>
</body>
</html>`}</code></pre>
        <p>The <code>pre</code> tag preserves spaces and line breaks, which is essential for the ASCII grid. The script overrides the font and sizing at runtime for precise character measurements. You can change the <code>color</code> property to customize the look.</p>
      </div>

      <div>
        <h3 className="section-label">Step 3. Handle the uploaded image</h3>
        <p>Create a file called <code>script.js</code> in the same folder. This code reads the image the user uploads:</p>
        <pre><code>{`const upload = document.getElementById('upload')
const output = document.getElementById('output')

upload.addEventListener('change', (e) => {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (event) => {
    const img = new Image()
    img.onload = () => render(img)
    img.src = event.target.result
  }
  reader.readAsDataURL(file)
})`}</code></pre>
        <p>Here, <code>FileReader</code> converts the image to a format the browser can display (<code>DataURL</code>). We wait for the image to fully load before processing it with the <code>render()</code> function.</p>
      </div>

      <div>
        <h3 className="section-label">Step 4. Measure characters and size the grid</h3>
        <p>Add these functions to set up the font and calculate how many columns and rows will fit in the window:</p>
        <pre><code>{`const FONT_SIZE = 14

output.style.fontFamily = 'Roboto Mono, monospace'
output.style.fontSize = FONT_SIZE + 'px'
output.style.lineHeight = '1'
output.style.letterSpacing = '0'

function getCharWidth() {
  const span = document.createElement('span')
  span.style.fontFamily = 'Roboto Mono, monospace'
  span.style.fontSize = FONT_SIZE + 'px'
  span.style.lineHeight = '1'
  span.style.letterSpacing = '0'
  span.style.whiteSpace = 'pre'
  span.style.position = 'absolute'
  span.style.visibility = 'hidden'
  span.textContent = 'A'.repeat(100)
  document.body.appendChild(span)
  const width = span.getBoundingClientRect().width / 100
  document.body.removeChild(span)
  return width
}

function render(img) {
  const charWidth = getCharWidth()
  const charHeight = FONT_SIZE

  const maxWidth = window.innerWidth * 0.9
  const maxHeight = window.innerHeight * 0.9

  const imgRatio = img.width / img.height
  const cellRatio = charWidth / charHeight

  let cols = Math.floor(maxWidth / charWidth)
  let rows = Math.floor(cols / imgRatio * cellRatio)

  if (rows * charHeight > maxHeight) {
    rows = Math.floor(maxHeight / charHeight)
    cols = Math.floor(rows * imgRatio / cellRatio)
  }

  drawCanvas(img, cols, rows)
}`}</code></pre>
        <p>Rather than assuming a fixed aspect ratio, we measure the actual rendered width of a character by briefly inserting a hidden span into the page. This lets us calculate the exact grid dimensions needed to fill the window without distorting the image. The <code>cellRatio</code> corrects for the fact that characters are taller than they are wide.</p>
      </div>

      <div>
        <h3 className="section-label">Step 5. Sample the image pixels</h3>
        <p>Add the <code>drawCanvas()</code> function, which scales the image to the calculated grid size and reads its pixel data:</p>
        <pre><code>{`function drawCanvas(img, cols, rows) {
  const canvas = document.createElement('canvas')
  canvas.width = cols
  canvas.height = rows
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, cols, rows)
  const pixels = ctx.getImageData(0, 0, cols, rows).data
  convert(pixels, cols, rows)
}`}</code></pre>
        <p>The <code>getImageData</code> method returns a flat array of RGBA values for every pixel, which we pass directly to <code>convert()</code>.</p>
      </div>

      <div>
        <h3 className="section-label">Step 6. Map brightness to characters</h3>
        <p>Now add the <code>CHARS</code> string, the brightness helper, and the <code>convert()</code> function:</p>
        <pre><code>{`const CHARS = ' .^\`",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'

function getBrightness(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b
}

function convert(pixels, cols, rows) {
  let result = ''
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const i = (y * cols + x) * 4
      const brightness = getBrightness(pixels[i], pixels[i + 1], pixels[i + 2])
      const charIndex = Math.floor(((255 - brightness) / 255) * (CHARS.length - 1))
      result += CHARS[charIndex]
    }
    result += '\n'
  }
  output.textContent = result
}`}</code></pre>
        <p>The <code>CHARS</code> string runs from lightest to darkest, so we invert the brightness with <code>255 - brightness</code> to map dark pixels to heavy characters. The longer character set gives much finer tonal gradations than a short one. The newline <code>{`'\\n'`}</code> at the end of each row ensures the ASCII forms a proper grid.</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label">It should <br /> look like this:</p>
  <img src={result} alt="Portrait converted to ASCII art displayed in the browser" style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div>      </div>

      <div>
        <h3 className="section-label">Step 7. Test it out</h3>
        <p>Open <code>index.html</code> in a browser and upload an image. High-contrast, simple images work best, like portraits, silhouettes, or bold graphics. Avoid busy or low-contrast images for the clearest ASCII output.</p>
      </div>

      <div>
        <h3 className="section-label">Step 8. Try some extensions</h3>
        <p>You could make it interactive: use a webcam feed via <code>navigator.mediaDevices.getUserMedia()</code> to generate ASCII in real time. Or add a slider to adjust the column count for more or less detail. Swapping in a different <code>CHARS</code> string changes the texture of the output entirely. These are fun ways to build on your project!</p>
      </div>
    </div>
  )
}
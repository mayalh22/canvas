import step3 from '../../assets/tutorials/p5-step3.png'
import step6 from '../../assets/tutorials/p5-step6.png'
import step7 from '../../assets/tutorials/p5-step7.png'

export default function P5JS() {
  return (
    <div className="rule-list">
      <h2 className="subtitle">Generative Drawing with P5.js</h2>
      <p>P5.js is a JavaScript library I recommend for anyone starting out with generative art. It gives you a canvas and a set of drawing functions so you can focus on making something instead of writing browser setup code. By the end of this tutorial you will have a looping animated sketch you can screenshot and submit!</p>

      <div>
        <h3 className="section-label">Step 1. Open the editor</h3>
        <p>Go to <a href="https://editor.p5js.org" target="_blank" rel="noreferrer" className="nav-link">editor.p5js.org</a> and create a free account. The editor starts you with two empty functions. The <code>setup()</code> function runs once when the sketch loads. The <code>draw()</code> function runs on a loop, once per frame. Delete everything inside both and start fresh.</p>
      </div>

      <div>
        <h3 className="section-label">Step 2. Create a canvas</h3>
        <p>Write the following inside <code>setup()</code>:</p>
        <pre><code>{`function setup() {
  createCanvas(600, 600);
  background(30);
}`}</code></pre>
        <p><code>createCanvas(600, 600)</code> tells P5 to create a drawing area that is 600 pixels wide and 600 pixels tall. <code>background(30)</code> fills it with a dark grey color — the number is a greyscale value between 0 (black) and 255 (white). Press the play button and you will see a dark square appear. You can change the canvas size to any two numbers, and you can pass a hex string like <code>background('#1f1c1f')</code> instead of a number!</p>
      </div>

      <div>
        <h3 className="section-label">Step 3. Draw your first shape</h3>
        <p>Write the following inside <code>draw()</code>:</p>
        <pre><code>{`function draw() {
  circle(300, 300, 100);
}`}</code></pre>
        <p><code>circle(x, y, diameter)</code> draws a circle at the given position. The top left corner of the canvas is position (0, 0) and the bottom right is (600, 600), so (300, 300) is the center. You should see a white circle appear! You can replace <code>circle()</code> with <code>rect(x, y, width, height)</code> for a rectangle or <code>line(x1, y1, x2, y2)</code> for a line.</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label"><br /> <br /> It should look like this:</p>
  <img src={step3} alt="White circle centered on dark canvas" style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div></div>

      <div>
        <h3 className="section-label">Step 4. Add color</h3>
        <p>Add these two lines directly above your <code>circle()</code> call:</p>
        <pre><code>{`fill(100, 200, 255);
noStroke();`}</code></pre>
        <p><code>fill(r, g, b)</code> sets the fill color for everything drawn after it using red, green, and blue values each between 0 and 255. <code>noStroke()</code> removes the outline from all shapes drawn after it. You can add <code>stroke(255, 200, 0)</code> and <code>strokeWeight(3)</code> to bring back a colored outline instead!</p>
      </div>

      <div>
        <h3 className="section-label">Step 5. Follow the mouse</h3>
        <p>Replace the fixed position values with the built-in variables <code>mouseX</code> and <code>mouseY</code>:</p>
        <pre><code>{`circle(mouseX, mouseY, 100);`}</code></pre>
        <p>P5.js updates <code>mouseX</code> and <code>mouseY</code> automatically every frame so you do not need to write any event listeners yourself. Move your mouse over the canvas and watch it go!</p>
      </div>

      <div>
        <h3 className="section-label">Step 6. Make it generative with random()</h3>
        <p>Rewrite your draw function like this. Keep <code>background(30)</code> in <code>setup()</code> only, do not move it into <code>draw()</code> or it will clear the canvas every frame and erase the buildup:</p>
        <pre><code>{`function setup() {
  createCanvas(600, 600);
  background(30);
}

function draw() {
  fill(random(255), random(255), random(255), 80);
  noStroke();
  circle(random(width), random(height), random(10, 80));
}`}</code></pre>
        <p><code>random(255)</code> returns a different number between 0 and 255 every time it is called, so each circle gets a different color. The fourth argument in <code>fill()</code> sets the opacity, where 0 is fully transparent and 255 is fully opaque. <code>random(width)</code> and <code>random(height)</code> use the canvas dimensions so the circles always stay within bounds. The sketch builds up over time since nothing clears it between frames! You can lock the hue by replacing two of the three <code>random(255)</code> calls with fixed values.</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label"><br /> <br /> It should look like this:</p>
  <img src={step6} alt="Colorful circles building up on a dark canvas" style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div>      </div>

      <div>
        <h3 className="section-label">Step 7. Create smooth motion with frameCount</h3>
        <p>The variable <code>frameCount</code> increases by 1 every frame. I use it with <code>sin()</code> and <code>cos()</code> to produce smooth repeating motion. If you want a trail effect without clearing the canvas each frame, use a semi-transparent rectangle instead of <code>background()</code>:</p>
        <pre><code>{`function setup() {
  createCanvas(600, 600);
  background(30);
}

function draw() {
  // this fades old frames slightly instead of clearing them fully
  fill(30, 30, 30, 25);
  noStroke();
  rect(0, 0, width, height);

  // now draw the moving circle on top
  fill(100, 200, 255);
  noStroke();
  let x = width / 2 + cos(frameCount * 0.02) * 200;
  let y = height / 2 + sin(frameCount * 0.02) * 200;
  circle(x, y, 40);
}`}</code></pre>
        <p><code>cos()</code> and <code>sin()</code> produce values that cycle between -1 and 1. Multiplying <code>frameCount</code> by <code>0.02</code> controls how fast the angle advances each frame. Multiplying the result by <code>200</code> sets the radius of the orbit. The semi-transparent rectangle has a fourth argument of <code>25</code>, which is its opacity — a lower number produces a longer trail because old frames fade more slowly. You can change <code>0.02</code> to speed up the motion and <code>200</code> to change the orbit size!</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label"><br /> <br /> It should look like this:</p>
  <img src={step7} alt="Circle orbiting the center with a fading trail" style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div></div>

      <div>
        <h3 className="section-label">Step 8. Save your output</h3>
        <p>Add this function to save a screenshot when you press S:</p>
        <pre><code>{`function keyPressed() {
  if (key === 's') saveCanvas('my-art', 'png');
}`}</code></pre>
        <p><code>keyPressed()</code> is a built-in P5 function that runs automatically whenever a key is pressed. <code>key</code> holds the value of the most recently pressed key as a string. <code>saveCanvas()</code> takes a filename and a file format and triggers a download. Let the sketch run until you see something you are happy with, then press S!</p>
      </div>

      <div>
        <h3 className="section-label">Step 9. Make your structural change</h3>
        <p>If you used this tutorial as your starting point, you need to make at least one structural change before submitting. Changing colors or sizes does not count. I suggest replacing circles with a grid of rectangles, adding a second layer that responds to mouse clicks, using <code>translate()</code> and <code>rotate()</code> to change the coordinate system, or replacing random placement with a sine wave pattern. Whatever you choose, describe it in your artist statement!</p>
      </div>
    </div>
  )
}
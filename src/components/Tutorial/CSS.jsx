import step2 from '../../assets/tutorials/css-step2.png'
import step4 from '../../assets/tutorials/css-step4.png'
import step5 from '../../assets/tutorials/css-step5.mov'

export default function CSS() {
  return (
    <div className="rule-list">
      <h2 className="subtitle">Making Art with Pure CSS</h2>
      <p>CSS can produce complex visual art without any JavaScript or image files. I love this approach because the output is entirely declarative — you describe what you want and the browser figures out how to render it. By the end of this tutorial you will have a looping animated composition you can screenshot or screen record and submit!</p>

      <div>
        <h3 className="section-label">Step 1. Set up your file</h3>
        <p>Create a file called <code>index.html</code> and put your CSS inside a <code>style</code> tag in the <code>head</code>. Start by giving the body a dark background and removing its default margin:</p>
        <pre><code>{`body {
  margin: 0;
  background: #1f1c1f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}</code></pre>
        <p><code>margin: 0</code> removes the default white border that browsers add around the body. <code>display: flex</code> with <code>justify-content: center</code> and <code>align-items: center</code> centers any child elements both horizontally and vertically. <code>height: 100vh</code> makes the body fill the full viewport height so the centering actually works. Open the file in a browser and you should see a centered dark page.</p>
      </div>

      <div>
        <h3 className="section-label">Step 2. Draw shapes with border-radius</h3>
        <p>Every HTML element is a rectangle by default. Setting <code>border-radius: 50%</code> turns it into a circle. Add a div to your HTML and style it:</p>
        <pre><code>{`<div class="shape"></div>

.shape {
  width: 200px;
  height: 200px;
  background: #4dab81;
  border-radius: 50%;
}`}</code></pre>
        <p><code>border-radius</code> rounds the corners of an element. At <code>50%</code> all four corners are rounded equally so a square becomes a circle. You can produce organic blob forms by using four separate values like <code>border-radius: 60% 40% 30% 70%</code> — each value controls one corner. I really enjoy experimenting with this one!</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label"><br /> <br /> It should look like this:</p>
  <img src={step2} alt="Teal circle centered on a dark background" style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div>
      </div>

      <div>
        <h3 className="section-label">Step 3. Animate with @keyframes</h3>
        <p>CSS animations use <code>@keyframes</code> to define what an element looks like at different points in time, and the <code>animation</code> property to apply that definition to an element:</p>
        <pre><code>{`@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.shape {
  animation: spin 4s linear infinite;
}`}</code></pre>
        <p>The <code>@keyframes</code> rule names the animation and defines its start and end states using <code>from</code> and <code>to</code>. You can also use percentage values like <code>0%</code>, <code>50%</code>, <code>100%</code> to define intermediate states. The <code>animation</code> shorthand takes the keyframe name, the duration, the timing function, and the iteration count in that order. <code>linear</code> means the speed stays constant throughout. <code>infinite</code> makes it loop forever. You can change <code>linear</code> to <code>ease-in-out</code> to make the motion accelerate and decelerate!</p>
      </div>

      <div>
        <h3 className="section-label">Step 4. Layer elements with position</h3>
        <p>I layer multiple shapes on top of each other using <code>position: absolute</code> inside a positioned parent container. Add several shapes to your HTML:</p>
        <pre><code>{`<div class="scene">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
</div>

.scene { position: relative; width: 400px; height: 400px; }
.shape { position: absolute; border-radius: 50%; }
.a { width: 200px; height: 200px; background: #ff5f74; top: 100px; left: 100px; }
.b { width: 140px; height: 140px; background: #c7d04a; top: 40px;  left: 200px; }
.c { width: 80px;  height: 80px;  background: #fbcbbc; top: 200px; left: 60px;  }`}</code></pre>
        <p><code>position: relative</code> on the parent establishes a coordinate system for its children. <code>position: absolute</code> on each child removes them from the normal document flow and lets you place them using <code>top</code>, <code>left</code>, <code>right</code>, and <code>bottom</code> relative to the parent. Without the <code>position: relative</code> parent, the children would position themselves relative to the whole page instead.</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label"><br /> <br /> It should look like this:</p>
  <img src={step4} alt="Three overlapping colored circles on a dark background" style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div>      </div>

<div>
        <h3 className="section-label">Step 5. Stagger the animations</h3>
        <p>I give each element a different duration and delay so they do not move in sync. This makes the whole composition feel much more alive!</p>
        <pre><code>{`@keyframes float {
  0%   { transform: translateY(0px) scale(1); }
  50%  { transform: translateY(-30px) scale(1.1); }
  100% { transform: translateY(0px) scale(1); }
}

.a { animation: float 3s ease-in-out infinite; }
.b { animation: float 5s ease-in-out infinite 0.8s; }
.c { animation: float 4s ease-in-out infinite 1.6s; }`}</code></pre>
        <p><code>translateY(-30px)</code> moves the element 30 pixels upward — negative values go up, positive values go down. <code>scale(1.1)</code> makes the element 10 percent larger at the midpoint of the animation. The last value in each <code>animation</code> declaration is the delay before the animation starts. Offsetting each element by about 0.8 seconds prevents them from moving together. You can also animate the <code>background</code> property inside the keyframes to shift colors at the same time as position!</p>
<div className="rule-item" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
  <p className="section-label"><br /> <br /> It should look like this:</p>
  <video src={step5} autoPlay loop muted playsInline style={{width: '55%', height: 'auto', marginLeft: 'auto'}} />
</div>      <h3 className="section-label">Step 6. Add detail with pseudo-elements</h3>
        <p>Every element has two invisible children called <code>::before</code> and <code>::after</code>. Setting <code>content: ''</code> and giving them a size makes them visible. I use these to add extra shapes without adding any HTML at all!</p>
        <pre><code>{`.a::before {
  content: '';
  display: block;
  width: 60px;
  height: 60px;
  background: #ffce48;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: -20px;
  animation: float 2.5s ease-in-out infinite reverse;
}`}</code></pre>
        <p><code>content: ''</code> is required — pseudo-elements do not render at all without it. <code>display: block</code> lets you give the pseudo-element a width and height. Since <code>.a</code> already has <code>position: absolute</code>, the pseudo-element can use <code>top</code> and <code>left</code> to position itself relative to its parent. The <code>reverse</code> keyword at the end of the animation declaration runs the keyframes backwards, so the pseudo-element moves up while its parent moves down.</p>
      </div>

      <div>
        <h3 className="section-label">Step 7. Save your output</h3>
        <p>Let the animation loop through a few full cycles and take a screenshot with Cmd+Shift+4 on Mac. If your piece relies on the motion to look good, use Cmd+Shift+5 to record a selected area of your screen instead. The recording or screenshot is what you attach to your submission!</p>
      </div>

      <div>
        <h3 className="section-label">Step 8. Make your structural change</h3>
        <p>If you used this tutorial as your starting point, you need to make at least one structural change before submitting. Changing colors or timing values does not count. I suggest building a repeating grid of elements using CSS grid, writing a JavaScript loop that generates elements programmatically instead of by hand, using <code>clip-path</code> to cut shapes into polygons, or adding a CSS filter like <code>hue-rotate</code> to shift all colors over time. Describe what you changed in your artist statement!</p>
      </div>
    </div>
  )
}
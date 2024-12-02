import './App.css'

function App() {

  return (
    <>
        <div className="container">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>

            <p className="paragraph">This is a regular paragraph. The quick brown fox jumps over the lazy dog.</p>
            <p className="small-paragraph">This is a small paragraph. The quick brown fox jumps over the lazy dog.</p>

            <ul>
                <li>Unordered list item one</li>
                <li>Unordered list item two</li>
                <li>Unordered list item three</li>
            </ul>

            <ol>
                <li>Ordered list item one</li>
                <li>Ordered list item two</li>
                <li>Ordered list item three</li>
            </ol>

            <a href="#">This is a link</a>
            <p><strong>This is bold text.</strong></p>
            <p><em>This is italic text.</em></p>
            <p><u>This is underlined text.</u></p>

            <blockquote>
                "Typography is the craft of endowing human language with a durable visual form." – Robert Bringhurst
            </blockquote>

            <p>Inline code: <code>console.log("Hello, world!");</code></p>
            <pre>
                 <code>
                {`function greet() {
                    console.log("Hello, world!");
                }
                greet();`}
                          </code>
             </pre>

            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>

            <form>
                <input type="text" placeholder="Enter text here"/>
            </form>
        </div>
    </>
  )
}

export default App

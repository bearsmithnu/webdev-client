export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>

      <p id="wd-ai-fg" className="wd-fg-color-blue">
        Almost all my roommates have left since I last wrote about them.
        I&apos;m <span className="wd-fg-color-black">really</span> running out
        of things to write about.
      </p>

      <p className="wd-fg-color-green">
        This paragraph has green mold on it, and{" "}
        <span className="wd-fg-color-black">
          this text has black mold :&#40;.
        </span>
        <br />
        also, i can&apos;t figure out how to render a left parenthesis using
        &lpar;, it just shows up in the text
      </p>
    </div>
  );
}

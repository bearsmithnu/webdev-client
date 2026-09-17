export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      I&apos;ve been playing{" "}
      <a id="wd-your-link" href="https://minesweeper.online/">
        Minesweeper
      </a>{" "}
      a lot lately.
      <br />
      <a href="https://github.com/bearmakingthings/" target="_blank" rel="noreferrer" id="wd-your-github">
        My GitHub
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" id="wd-ai-link">
        MDN: table element
      </a>
    </>
  );
}

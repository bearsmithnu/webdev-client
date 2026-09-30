import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Margins from "./Margins";
import MediaQueriesDemo from "./MediaQueriesDemo";
import Padding from "./Padding";
import Positions from "./Positions";
import ReactIconsSampler from "./ReactIconsSampler";
import Zindex from "./Zindex";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>

      <p id="are-we-supposed-to-move-these-into-css-too">green and yellow</p>

      <p id="wd-ai-style-attr">AI has style?</p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>

        <p id="wd-id-selector-3">
          All my roommates are home at once, this is so unusual.
        </p>

        <p id="wd-ai-id-selector">Robot beep &#129302;</p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>

        <h4 className="wd-your-class">My cool class</h4>
        <p className="wd-your-class">We have lessons every Tuesday.</p>

        <h4 className="wd-ai-class">AI&apos;s class</h4>
        <p className="wd-ai-class">A synthesis of stuff but worse</p>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-ai-selector-5">AI beep boop</span>
            </p>
          </div>
          <div className="wd-selector-4">
            This is a 4 directly nested beneath a 1.
          </div>

          <h3 id="conflicting-rule">
            I&apos;m conflicted! I am an h3, which has a tag selector, nested
            inside a wd-selector-1 class element, which has a class selector,
            and I have an ID called conflicting-rule. The ID&apos;s background
            color should win, since it&apos;s the most specific. However, the
            font color should be inherited down, since the ID rule does not 
            specify a text color.
          </h3>
        </div>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}

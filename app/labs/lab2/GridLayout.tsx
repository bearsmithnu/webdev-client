export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          <h3>Left half</h3>
        </div>
        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right half</h3>
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          <h3>Side bar</h3>
        </div>
        <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
          <h3>Main content</h3>
        </div>
        <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
          <h3>Side bar</h3>
        </div>
      </div>

      <div className="wd-grid-row">
        <div className="wd-grid-fourths wd-bg-color-red">
          <h3>1st</h3>
        </div>
        <div className="wd-grid-fourths wd-bg-color-blue">
          <h3>2nd</h3>
        </div>
        <div className="wd-grid-fourths wd-bg-color-red">
          <h3>3rd</h3>
        </div>
        <div className="wd-grid-fourths wd-bg-color-blue">
          <h3>4th</h3>
        </div>
      </div>

      <div id="wd-ai-grid" className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-green">
          <h3>Left third</h3>
        </div>
        <div className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right 2/3</h3>
        </div>
      </div>
    </div>
  );
}

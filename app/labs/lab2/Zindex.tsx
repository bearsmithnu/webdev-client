export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-zindex-2 wd-bg-color-red wd-dimension-square">
          Square
        </div>
        <div className="wd-zindex-send-to-back wd-pos-absolute-160-30 wd-bg-color-blue wd-dimension-square">
          Square 2
        </div>
        <div className="wd-ai-zindex-top wd-pos-absolute-160-30 wd-bg-color-red wd-dimension-landscape">
          AI Z-Index
        </div>
      </div>
    </div>
  );
}

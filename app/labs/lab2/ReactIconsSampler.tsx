import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { PiAlienBold } from "react-icons/pi";
import { VscMagnet } from "react-icons/vsc";
import { MdAccessibilityNew } from "react-icons/md";
import { TiWine } from "react-icons/ti";



export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h3 className="text-lg font-semibold">React Icons Sampler</h3>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />

        <VscMagnet className="wd-fg-color-red wd-dimension-square" />
        <PiAlienBold className="wd-fg-color-green" />

        <MdAccessibilityNew className="wd-fg-color-white wd-bg-color-blue"/>
        <TiWine className="wd-fg-color-red" />
      </div>
    </div>
  );
}

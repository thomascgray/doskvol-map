// @ts-ignore
import { MapInteractionCSS } from "react-map-interaction";
import { LegendEntry } from "./LegendEntry";
import { DistrictLabel } from "./DistrictLabel";
import { Landmark } from "./Landmark";
import { useState, useEffect } from "react";
import districts from "./districts.json";
import districtLabels from "./district-labels.json";
import landmarks from "./landmarks.json";
import ReactTooltip from "react-tooltip";
function App() {
  const [showDistrictLabels, setShowDistrictLabels] = useState(true);
  const [showLandmarks, setshowLandmarks] = useState(true);

  useEffect(() => {
    if (showLandmarks) {
      ReactTooltip.rebuild();
    }
  }, [showLandmarks]);

  return (
    <div className="flex flex-row">
      <div className="h-screen bg-[#4e525b] w-3/5">
        <MapInteractionCSS minScale={0.3} maxScale={4}>
          <img src="./map-no-labels.jpg" alt="" />
          {showDistrictLabels &&
            districtLabels.map((dl) => (
              <DistrictLabel key={dl.title} {...dl} />
            ))}
          {showLandmarks &&
            landmarks.map((l) => <Landmark key={l.id} {...l} />)}
        </MapInteractionCSS>
      </div>

      <div className="h-screen w-2/5 font-im-fell">
        <div>
          <label className="block p-4 flex flex-row items-center space-x-2">
            <input
              checked={showDistrictLabels}
              type="checkbox"
              onChange={(e) => {
                setShowDistrictLabels(e.currentTarget.checked);
              }}
            />
            <span>Show District Labels</span>
          </label>
          <label className="block p-4 flex flex-row items-center space-x-2">
            <input
              checked={showLandmarks}
              type="checkbox"
              onChange={(e) => {
                setshowLandmarks(e.currentTarget.checked);
              }}
            />
            <span>Show Landmarks</span>
          </label>
        </div>
        <div className="text-lg p-4 space-y-4">
          {districts.map((d) => (
            <LegendEntry key={d.title} {...d} />
          ))}
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
}

export default App;

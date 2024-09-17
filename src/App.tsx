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
      {/* the legend */}
      <div className="h-screen hidden xl:block min-w-[400px] font-im-fell">
        <div className="h-[15%]">
          <label className="p-4 flex flex-row items-center space-x-2">
            <input
              checked={showDistrictLabels}
              type="checkbox"
              onChange={(e) => {
                setShowDistrictLabels(e.currentTarget.checked);
              }}
            />
            <span>Show District Labels</span>
          </label>
          <label className="p-4 flex flex-row items-center space-x-2">
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
        <div className="h-[85%] text-lg p-4 space-y-4 overflow-y-auto">
          {districts.map((d) => (
            <LegendEntry key={d.title} {...d} />
          ))}
        </div>
      </div>
      {/* the map */}
      <div className="h-screen flex-grow bg-[#4e525b]">
        <MapInteractionCSS minScale={0.3} maxScale={4}>
          <img src="./map-no-labels.jpg" className="" alt="" />

          {showLandmarks &&
            landmarks.map((l) => <Landmark key={l.title} {...l} />)}

          {showDistrictLabels &&
            districtLabels.map((dl) => (
              <DistrictLabel key={dl.title} {...dl} />
            ))}
        </MapInteractionCSS>
      </div>

      <ReactTooltip />
    </div>
  );
}

export default App;

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
  const [useColors, setUseColors] = useState(false);

  useEffect(() => {
    if (showLandmarks) {
      ReactTooltip.rebuild();
    }
  }, [showLandmarks]);

  return (
    <div className="flex flex-col-reverse xl:flex-row">
      {/* the legend */}
      <div className="font-im-fell h-[20vh] xl:h-screen xl:min-w-[400px] xl:max-w-[20vw]">
        <div className="h-[15%] flex flex-row space-x-6 xl:flex-col xl:space-x-0">
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
          <label className="p-4 flex flex-row items-center space-x-2">
            <input
              checked={useColors}
              type="checkbox"
              onChange={(e) => {
                setUseColors(e.currentTarget.checked);
              }}
            />
            <span>Use Color</span>
          </label>
        </div>

        <div className="h-[85%] text-lg grid grid-cols-4 xl:grid-cols-2 p-4 overflow-y-auto">
          {districts.map((d) => (
            <LegendEntry key={d.title} {...d} />
          ))}
        </div>
      </div>

      {/* the map */}
      <div className="h-[80vh] xl:h-screen flex-grow bg-[#4e525b]">
        <MapInteractionCSS minScale={0.3} maxScale={4}>
          <img src="./map-no-labels.jpg" className="" alt="" />

          {showLandmarks &&
            landmarks.map((l) => {
              // get color from matching district
              const color = districtLabels.find(
                (dl) => dl.title === l.district
              )?.color;
              return (
                <Landmark
                  key={l.title}
                  {...l}
                  color={useColors && color ? color : "#000"}
                />
              );
            })}

          {showDistrictLabels &&
            districtLabels.map((dl) => (
              <DistrictLabel
                key={dl.title}
                {...dl}
                color={useColors && dl.color ? dl.color : "#FFF"}
              />
            ))}
        </MapInteractionCSS>
      </div>

      <ReactTooltip />
    </div>
  );
}

export default App;

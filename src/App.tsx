// @ts-ignore
import { MapInteractionCSS } from "react-map-interaction";
import { LegendEntry } from "./LegendEntry";
import { DistrictLabel } from "./DistrictLabel";
import { Landmark } from "./Landmark";
import { useState, useEffect } from "react";
import districts from "./districts.json";
import rawDistrictLabelData from "./district-labels.json";
import rawLandmarkData from "./landmarks.json";
import ReactTooltip from "react-tooltip";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

interface iReactMapValue {
  scale: number;
  translation: {
    x: number;
    y: number;
  };
}
function App() {
  const [showDistrictLabels, setShowDistrictLabels] = useState(true);
  const [showLandmarks, setshowLandmarks] = useState(true);

  const [markerData, setMarketData] = useState({
    landmarks: [...rawLandmarkData],
    districts: [...rawDistrictLabelData],
  });

  const [mapValue, setMapValue] = useState<iReactMapValue>({
    scale: 1,
    translation: { x: 0, y: 0 },
  });

  // const districtLabelData = [...districtLabels];

  // useEffect(() => {
  //   if (showLandmarks) {
  //     ReactTooltip.rebuild();
  //   }
  // }, [showLandmarks]);

  // x: 3439
  // y: 4587

  function handleResize() {
    const relativeWidth = window.innerWidth / 3439;

    const newDistrictLabels = markerData.districts.map((dl) => {
      // get the original DL for this one
      const ogDL = rawDistrictLabelData.find((rdl) => rdl.title === dl.title);
      return {
        ...dl,
        top: ogDL!.top * relativeWidth,
        left: ogDL!.left * relativeWidth,
      };
    });

    const newLandmarks = markerData.landmarks.map((l) => {
      // get the original DL for this one
      const ogLandmark = rawLandmarkData.find((rl) => rl.title === l.title);
      return {
        ...l,
        top: ogLandmark!.top * relativeWidth,
        left: ogLandmark!.left * relativeWidth,
      };
    });

    setMarketData({
      ...markerData,
      districts: newDistrictLabels,
      landmarks: newLandmarks,
    });
  }

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-[#4e525b]">
      <MapInteractionCSS
        minScale={0.3}
        maxScale={1.6}
        value={mapValue}
        onChange={(value: iReactMapValue) => setMapValue(value)}
      >
        <div className="h-screen w-screen relative">
          <img src="./map-no-labels.jpg" className="" />

          {markerData.districts.map((districtLabel) => (
            <DistrictLabel
              key={districtLabel.title}
              title={districtLabel.title}
              top={districtLabel.top}
              left={districtLabel.left}
              rotation={districtLabel.rotation}
            />
          ))}

          {markerData.landmarks.map((landmark) => (
            <Landmark
              key={landmark.title}
              idx={landmark.idx}
              title={landmark.title}
              text={landmark.text}
              top={landmark.top}
              left={landmark.left}
            />
          ))}
        </div>
      </MapInteractionCSS>
      <ReactTooltip />
    </div>
  );
}

export default App;

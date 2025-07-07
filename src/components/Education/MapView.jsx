import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { LayersControl, ZoomControl } from "react-leaflet";
import { Search, Layers } from "lucide-react";

// Fix default marker icon paths
import "leaflet/dist/leaflet.css";
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 8, { animate: true });
    map.invalidateSize();
  }, [center, map]);
  return null;
}

export default function MapView({ steps, activeIndex, onMarkerClick }) {
  const activeStep = steps[activeIndex];
  const [activeLayer, setActiveLayer] = useState("Dark");
  const [layerMenuOpen, setLayerMenuOpen] = useState(false);

  const iconGreen = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const iconBlue = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const iconPurple = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <>
      <MapContainer
        center={[activeStep.lat, activeStep.lng]}
        zoom={8}
        scrollWheelZoom
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        {/* Map Tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; CartoDB"
        />

        {/* Keep map centered on active step */}
        <MapUpdater center={[activeStep.lat, activeStep.lng]} />

        {/* Path */}
        <Polyline
          positions={steps.map((s) => [s.lat, s.lng])}
          pathOptions={{
            color: "#3388ff",
            weight: 4,
          }}
        />

        <LayersControl position="bottomleft">
          <LayersControl.BaseLayer checked name="Streets">
            {activeLayer === "Streets" && (
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
            )}
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Dark">
            {activeLayer === "Dark" && (
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution="&copy; CartoDB"
              />
            )}
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* Markers */}
        {steps.map((step, index) => (
          <Marker
            key={step.id}
            position={[step.lat, step.lng]}
            icon={
              step.title.includes("Toronto")
                ? iconGreen
                : step.title.includes("North Park")
                ? iconBlue
                : iconPurple
            }
            eventHandlers={{
              click: () => onMarkerClick(index),
            }}
          />
        ))}
        <ZoomControl position="bottomright" />
      </MapContainer>

      {/* These overlays can stay outside */}

      <div className="absolute bottom-2 left-2 z-[1000]">
        <div className="relative group">
          {/* The button */}
          <button
            onClick={() => setLayerMenuOpen((prev) => !prev)}
            className="p-2 bg-[#2c2c2e]/100 backdrop-blur-sm rounded shadow"
          >
            <Layers className="w-10 h-10 text-gray-300" />
          </button>

          {/* The menu (shown on hover) */}
          {layerMenuOpen && (
            <div className="absolute bottom-full mb-2 flex flex-col bg-[#2c2c2e]/60 backdrop-blur-sm rounded shadow p-2 space-y-1">
              <button
                onClick={() => {
                  setActiveLayer("Streets");
                  setLayerMenuOpen(false);
                }}
                className={`px-3 py-1 text-sm rounded text-white ${
                  activeLayer === "Streets"
                    ? "bg-gray-700"
                    : "hover:bg-gray-800"
                }`}
              >
                Streets
              </button>
              <button
                onClick={() => {
                  setActiveLayer("Dark");
                  setLayerMenuOpen(false);
                }}
                className={`px-3 py-1 text-sm text-white rounded ${
                  activeLayer === "Dark" ? "bg-gray-700" : "hover:bg-gray-800"
                }`}
              >
                Dark
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className="
    absolute top-4 left-4 z-[1000]
    hidden md:flex
    bg-white/60 backdrop-blur-sm shadow rounded-full
    px-4 py-2 items-center space-x-2
    w-72
  "
      >
        <Search
          className="w-5 h-5 text-gray-500 font-bold flex-shrink-0"
          strokeWidth={3}
        />
        <span className="text-gray-800 font-medium block leading-none">
          Virain Bawa
        </span>
      </div>
    </>
  );
}

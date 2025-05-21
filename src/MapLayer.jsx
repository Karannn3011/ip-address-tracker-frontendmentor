import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapLayer({ lat, lon }) {
  useEffect(() => {
    if (!lat || !lon) return;

    const map = L.map("map", {
      zoomControl: false,
    }).setView([lat, lon], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup("You are here!").openPopup();

    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return <div id="map" className="w-full h-[100vh] z-10"></div>;
}

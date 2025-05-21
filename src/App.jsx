import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Info from "./Info.jsx";
import MapLayer from "./MapLayer.jsx";

export default function App() {
  const [ipData, setIpData] = useState({
    query: "192.212.174.101",
    city: "Brooklyn",
    country: "United States",
    zip: "10001",
    timezone: "America/New_York",
    isp: "SpaceX Starlink",
    lat: 40.7128,
    lon: -74.006,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch default IP data on component mount
  useEffect(() => {
    fetchIpData();
  }, []);

  async function fetchIpData(ip = "") {
    try {
      setIsLoading(true);
      setError(null);

      const url = ip
        ? `http://ip-api.com/json/${ip}`
        : "http://ip-api.com/json/";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch IP data");
      }

      const data = await response.json();

      if (data.status === "fail") {
        throw new Error(data.message || "Invalid IP address");
      }

      setIpData(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching IP data:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={fetchIpData}>
        <Info ipData={ipData} isLoading={isLoading} error={error} />
      </Header>
      <MapLayer lat={ipData.lat} lon={ipData.lon} />
    </div>
  );
}

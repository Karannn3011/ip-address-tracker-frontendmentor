export default function Info({ ipData, isLoading, error }) {
  if (error) {
    return (
      <div className="w-[100%] bg-white rounded-lg shadow-md p-6 relative z-20 lg:w-[80%] mx-auto">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-[100%] bg-white rounded-lg shadow-md p-6 relative z-20 lg:w-[80%] mx-auto ">
      {isLoading ? (
        <div className="flex justify-center items-center h-24">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left lg:flex lg:justify-around">
          <div className="md:border-r md:border-gray-300 md:pr-4">
            <h2 className="text-xs tracking-wider text-gray-400 font-semibold mb-1">IP ADDRESS</h2>
            <p className="font-medium text-xl">{ipData.query}</p>
          </div>
          
          <div className="md:border-r md:border-gray-300 md:pr-4">
            <h2 className="text-xs tracking-wider text-gray-400 font-semibold mb-1">LOCATION</h2>
            <p className="font-medium text-xl">{ipData.city}, {ipData.country} {ipData.zip}</p>
          </div>
          
          <div className="md:border-r md:border-gray-300 md:pr-4">
            <h2 className="text-xs tracking-wider text-gray-400 font-semibold mb-1">TIMEZONE</h2>
            <p className="font-medium text-xl">{ipData.timezone}</p>
          </div>
          
          <div>
            <h2 className="text-xs tracking-wider text-gray-400 font-semibold mb-1">ISP</h2>
            <p className="font-medium text-xl">{ipData.isp}</p>
          </div>
        </div>
      )}
    </div>
  );
}
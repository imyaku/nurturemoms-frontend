import React from "react";

function Home() {
  return (
    <div>
      <main className="ml-0 lg:ml-[16.25rem] mt-20 lg:mt-100 p-4 lg:p-5">
        {/* Content section */}
        <div className="flex flex-wrap">
          {/* Home Card */}
          <div className="w-full lg:w-1/2 p-2 lg:p-3">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Number of Patients</h2>
              <p>10</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-2 lg:p-3">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Available Doctors</h2>
              <p>3</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home

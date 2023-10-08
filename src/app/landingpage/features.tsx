import React from "react";

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              NurtureMoms Feature List
            </h1>
            <div className="h-1 w-20 bg-yellow-200 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="..\assets\booking.png"
                alt="content"
              ></img>
              <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                Feature #1
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Booking Appointment
              </h2>
              <p className="leading-relaxed text-base">
                This invaluable tool not only simplifies the process of
                scheduling doctor consultations but also empowers expectant and
                experienced mothers alike to take charge of their healthcare
                needs. In a world where convenience is key, our platform ensures
                that you can access the essential medical support you require
                throughout your unique motherhood journey, all with the click of
                a button.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="..\assets\calendar.png"
                alt="content"
              ></img>
              <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                Feature #2
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Calendar Functionality
              </h2>
              <p className="leading-relaxed text-base">
                This dynamic tool enables mothers to set appointment dates at
                their convenience while providing a comprehensive overview of
                scheduled appointments. This way, you can efficiently manage
                your appointments, ensuring a seamless and organized healthcare
                experience throughout your motherhood journey.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="..\assets\filemangement.png"
                alt="content"
              ></img>
              <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                Feature #3
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                File Management
              </h2>
              <p className="leading-relaxed text-base">
                Includes a robust file manager feature, empowering mothers to
                securely upload and manage essential documents and images
                related to their motherhood journey. This invaluable tool
                ensures that all pertinent information and memories are neatly
                organized and readily accessible within the app, providing a
                comprehensive and personalized experience for every user.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

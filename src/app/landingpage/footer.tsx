import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <div className="flex items-center">
          <img
            src="..\assets\logo.png"
            alt="NurtureMomsLogo"
            className="w-8 h-8 mr-2 rounded-full"
          />
          <p className="text-sm text-gray-500">© 2023 NurtureMoms</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
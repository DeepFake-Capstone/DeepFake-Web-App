import React, { useState } from 'react';
import { FileUpload } from './ui/file-upload';

export const FileUploadSection = () => {
  const [activeTab, setActiveTab] = useState("Image");

  return (
    <div className="flex justify-center mt-12">
      <div className="flex flex-col items-center justify-center text-center">
        
        <div className="inline-flex mb-2">
          {["Image", "Audio", "Video"].map((tab) => (
            <button
              key={tab}
              className={`bg-white/20 text-fuchsia-50 hover:bg-gray-400 text-white font-normal py-2 px-4 ${activeTab === tab ? "bg-gray-400" : ""} ${tab === "Image" ? "rounded-l" : tab === "Video" ? "rounded-r" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="border-4 border-dotted border-gray-300 p-4 rounded-lg">
          {/* File Upload Component based on Active Tab */}
          <div className="backdrop-blur-sm bg-white/20">
            {activeTab === "Image" && <FileUpload type="image" />}
            {activeTab === "Audio" && <FileUpload type="audio" />}
            {activeTab === "Video" && <FileUpload type="video" />}
          </div>
        </div>

        {/* Uncomment to add an API button */}
        {/* <Button label={"Hit API !!"} /> */}
      </div>
    </div>
  );
};
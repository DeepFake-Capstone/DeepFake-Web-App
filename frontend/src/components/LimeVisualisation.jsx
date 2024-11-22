import React, { useState } from "react";

export const LimeVisualization = () => {
  const [imageFile, setImageFile] = useState(null);
  const [limeImage, setLimeImage] = useState(null);

  const handleFileUpload = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleGenerateLime = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch("/lime", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        setLimeImage(URL.createObjectURL(blob));
      } else {
        console.error("Error generating LIME visualization");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerateLime}
      >
        Generate LIME
      </button>
      {limeImage && (
        <div className="mt-4">
          <h3 className="text-center">LIME Visualization</h3>
          <img src={limeImage} alt="LIME explanation" className="border rounded-lg" />
        </div>
      )}
    </div>
  );
};

import { cn } from "../../lib/utils.ts";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload, IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import { Button } from "../common/Button.jsx";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [label, setLabel] = useState("");

  const [realScore,setRealScore] = useState(null)
  const [fakeScore,setFakeScore] = useState(null)

  // const [prediction, setPrediction]=useState("");

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onChange && onChange(newFiles);
  };

  const handleFileDelete = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering file input
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setLabel("");
    setFakeScore(null);
    setRealScore(null);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", files[0]);
    console.log(files);
    try {
      // -----------------------For Image prediction------------------------------
      const response = await axios.post('http://127.0.0.1:5000/predict',
      
      // -----------------------For video prediction------------------------------
      // const response = await axios.post('http://127.0.0.1:5000/predictVideo',
        formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setLabel(response.data['predicted_class']);
      setFakeScore(response.data['scoreFake']);
      setRealScore(response.data['scoreReal']);
      // setPrediction(response.data['prediction'])
    } catch (error) {
      console.error(error);
    }
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <form name="imageClassification" onSubmit={handleSubmit}>
        <div className="w-full" {...getRootProps()}>
          <motion.div
            onClick={handleClick}
            whileHover="animate"
            className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
          >
            <input
              ref={fileInputRef}
              id="file-upload-handle"
              type="file"
              onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
              className="hidden"
            />

            <div className="flex flex-col items-center justify-center">
              <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
                Upload file
              </p>
              <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
                Drag or drop your files here or click to upload
              </p>
              <div className="relative w-full mt-10 max-w-xl mx-auto">
                {files.length > 0 &&
                  files.map((file, idx) => (
                    <motion.div
                      key={"file" + idx}
                      layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                      className={cn(
                        "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
                        "shadow-sm"
                      )}
                    >
                      <div className="flex justify-between w-full items-center gap-4">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
                        >
                          {file.name}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
                        >
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </motion.p>
                      </div>

                      <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 "
                        >
                          {file.type}
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                        >
                          modified{" "}
                          {new Date(file.lastModified).toLocaleDateString()}
                        </motion.p>

                        {/* Delete Icon */}
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          onClick={(e) => handleFileDelete(idx, e)}
                          className="ml-auto p-2 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition"
                        >
                          <IconX className="w-4 h-4 text-red-500 dark:text-red-400" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                {!files.length && (
                  <motion.div
                    layoutId="file-upload"
                    variants={mainVariant}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={cn(
                      "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
                      "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                    )}
                  >
                    {isDragActive ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-neutral-600 flex flex-col items-center"
                      >
                        Drop it
                        <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                      </motion.p>
                    ) : (
                      <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                    )}
                  </motion.div>
                )}

                {!files.length && (
                  <motion.div
                    variants={secondaryVariant}
                    className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
                  ></motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        {label && (
          <div className={`text-xl ${label === "Real" ? "text-green-400" : "text-red-400"}`}>
            {label} {/*({prediction})}*/}
          </div>
        )}
        {label == "Real"
          ? <div className="text-xl text-green-300"> Confidence: {realScore}%</div> 
          : <></>
        }
        {label == "Fake"
          ? <div className="text-xl text-red-300"> Confidence: {fakeScore}%</div> 
          : <></>
        }
        <Button label={"Hit API!!"} onClick={handleSubmit} />
      </form>
    </>
  );
};

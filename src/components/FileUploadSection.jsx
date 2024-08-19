import React from 'react';
import { FileUpload } from './ui/file-upload';

export const FileUploadSection = () => {
  return (
    <div className='flex justify-center mt-12'>
      <div className='flex flex-col items-center justify-center text-center '>
        <div className="border-4 border-dotted border-gray-300 p-4 rounded-lg ">
          <div className='backdrop-blur-sm bg-white/20'>
          <FileUpload />
          </div>
        </div>
        <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mt-8">
          Hit API!!
        </button>
      </div>
    </div>
  );
};

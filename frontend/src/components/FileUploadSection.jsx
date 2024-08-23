import React from 'react';
import { FileUpload } from './ui/file-upload';
import {Button} from './common/Button'

export const FileUploadSection = () => {
  return (
    <div className='flex justify-center mt-12'>
      <div className='flex flex-col items-center justify-center text-center '>
     
      <div class="inline-flex mb-2">
        <button class="bg-white/20 text-fuchsia-50 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
          Image
        </button>
        <button class="bg-white/20 text-fuchsia-50 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 ">
          Audio
        </button>
        <button class="bg-white/20 text-fuchsia-50 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
          Video
        </button>
      </div>

        <div className="border-4 border-dotted border-gray-300 p-4 rounded-lg ">
          <div className='backdrop-blur-sm bg-white/20'>
          <FileUpload />
          </div>
        </div>
        {/* <Button label={"hit api !!"}/> */}
      </div>
    </div>
  );
};

import { Header } from '../components/Header';
import { FileUploadSection } from '../components/FileUploadSection';
import { DeveloperSection } from '../components/DeveloperSection';
import { BackgroundBeams } from '../components/ui/background-beams'
import { people } from '../data/developerData';

export const Dashboard=()=>{
  return (
    <>
      <BackgroundBeams className='bg-black fixed inset-0 w-screen h-screen -z-10 bg-cover' />
      <Header />
      <FileUploadSection />
      <DeveloperSection people={people} />
    </>
  );
}



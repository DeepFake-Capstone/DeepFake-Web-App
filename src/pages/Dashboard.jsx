import { Header } from '../components/Header';
import { FileUploadSection } from '../components/FileUploadSection';
import { DeveloperSection } from '../components/DeveloperSection';
import { BackgroundBeams } from '../components/ui/background-beams'

const people = [
    {
      id: 1,
      name: "Dr. Suresh Raikwar",
      designation: "Mentor",
      image:
        "./src/assets/developer/dr_suresh.png",
    },
    {
      id: 2,
      name: "Dr. Prashant S Rana",
      designation: "Mentor",
      image:
        "./src/assets/developer/dr_ps.png",
    },
    {
      id: 3,
      name: "Arshit Sharma",
      designation: "Software Engineer",
      image:
        "./src/assets/developer/arshit.png",
    },
    {
      id: 4,
      name: "Himanshu Bansal",
      designation: "Data Scientist",
      image:
        "./src/assets/developer/himanshu.png",
    },
    {
      id: 5,
      name: "Mehak Sharma",
      designation: "Product Manager",
      image:
        "./src/assets/developer/mehak.png",
    },
    {
      id: 6,
      name: "Mukul Jindal",
      designation: "Data Scientist",
      image:
        "./src/assets/developer/mukul.png",
    },
    {
      id: 7,
      name: "Aseem Mittal",
      designation: "Product Manager",
      image:
        "./src/assets/developer/aseem.png",
    },
  ];

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



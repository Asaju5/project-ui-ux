import Image from "next/image";
import photo1 from "../assets/Faysal.png";
import photo2 from "../assets/فيصل.png";
import photo3 from "../assets/Vector.png";
import { useRouter } from "next/router";
import { useEffect } from "react";
function LandingPage() {
  const navigate = useRouter();
  useEffect(() => {
    setTimeout(() => {
      navigate.push("/Onboard");
    }, 1500);
  });
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-12 md:mb-0 pr-5 md:pr-0">
          <div className="flex justify-between relative">
            <div />
            <Image
              src={photo2}
              alt="photo2"
              priority
              quality={70}
              height="45"
              className="mr-2 absolute -top-8 right-0"
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <Image
              src={photo3}
              alt="photo3"
              priority
              quality={70}
              height="80"
            />
            <Image src={photo1} alt="photo1" priorityquality={70} height="60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

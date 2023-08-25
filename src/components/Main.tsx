import Image from "next/image";
import imageMain from "../images/img-main.svg"
import { Container } from "./Container";

export function Main () {
  return (
    <>
      <Container className="flex flex-wrap bg-[#101522] p-16">
        <div className="flex items-center w-full lg:w-1/2">
        <div className="">
            <Image
              src={imageMain}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
          
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tigh">
              Indique e ganhe
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-400 lg:text-xl xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum odit placeat ipsa optio incidunt deserunt, dignissimos quaerat hic ut a facilis sunt id expedita dolorem aspernatur minima iure possimus!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-3 py-2 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Veja mais sobre as indicações
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div>
      </div>
    </>
  );
}
import Image from "next/image";
import heroImg from "../images/hero.png";
import { Container } from "./Container";

export function Hero () {
  return (
    <>
      <Container className="flex flex-wrap ml-8">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-16">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tigh">
              Faça suas indicações agora
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-700 lg:text-xl xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum odit placeat ipsa optio incidunt deserunt, dignissimos quaerat hic ut a facilis sunt id expedita dolorem aspernatur minima iure possimus!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Teste agora
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <div>
      </div>
    </>
  );
}



import Image from "next/image";

export default function Inovasi() {
  return (
    <>
      <div className="w-full h-[40vh] image bg-cover px-24">
        <h1 className="text-4xl md:text-6xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
          Inovasi Puskesmas
        </h1>
      </div>
      <div className="container flex flex-wrap justify-center my-6 gap-2">
        <Image
          src="/inovasi/inovasi.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-[70%] h-auto"
        ></Image>
        <Image
          src="/inovasi/kebuli2.jpeg"
          alt=""
          width={1000}
          height={1000}
          className="w-[70%] h-auto"
        ></Image>
        <Image
          src="/inovasi/kebuli.jpeg"
          alt=""
          width={1000}
          height={1000}
          className="w-[70%] h-auto"
        ></Image>
      </div>
    </>
  );
}

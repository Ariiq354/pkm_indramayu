import Image from "next/image";

export default function Inovasi() {
  return (
    <>
      <div className="w-full h-[40vh] image bg-cover px-24">
        <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
          Inovasi Puskesmas
        </h1>
      </div>
      <div className="container flex justify-center my-6">
        <Image
          src="/inovasi/inovasi.jpg"
          alt=""
          width={1000}
          height={1000}
        ></Image>
      </div>
    </>
  );
}

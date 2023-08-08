import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import LimitedParagraph from "@/lib/limitedParagraph";

export default async function Berita() {
  const data = await prisma.tb_berita.findMany();

  return (
    <>
      <div className="w-full h-[40vh] image bg-cover px-24">
        <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
          Berita Puskesmas
        </h1>
      </div>
      <div className="container md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-10">
        {data.map((item) => (
          <div
            key={item.id_berita}
            className="bg-white shadow-md rounded overflow-hidden max-w-sm mx-auto border-t-4 border-t-red-500 my-5 sm:my-0"
          >
            <Image
              src={item.path_image}
              alt="Image"
              className="w-full h-[35vh] bg-cover image"
              width={500}
              height={500}
              layout=""
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-red-600">
                {item.nama}
              </h2>
              <LimitedParagraph text={item.deskripsi} wordLimit={20} />
            </div>

            <div className="p-4 bg-white flex justify-center">
              <Link href={`/berita/${item.id_berita}`}>
                <button className="bg-white border-2 text-gray-600 px-4 py-2 rounded hover:border-red-400 hover:bg-red-400 hover:text-white duration-150">
                  Selengkapnya
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default async function Page({ params }: { params: { slug: string } }) {
  const dataGambar = await prisma.tb_galeri.findMany({
    where: { jenis: "foto" },
  });

  const dataVideo = await prisma.tb_galeri.findMany({
    where: { jenis: "video" },
  });

  return params.slug === "gambar" ? (
    <>
      <div className="w-full h-[40vh] image bg-cover px-24">
        <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
          Galeri Puskesmas
        </h1>
      </div>

      <div className="flex w-full justify-center my-10">
        <Link href="/galeri/gambar">
          <button className="border-2 text-white bg-red-500 border-red-500 duration-300 font-bold py-2 px-4 rounded mr-2">
            Gambar
          </button>
        </Link>
        <Link href="/galeri/video">
          <button className="border-2 border-red-300 text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 duration-300 font-bold py-2 px-4 rounded">
            Video
          </button>
        </Link>
      </div>

      <div className="container flex flex-wrap  1 gap-10 my-10">
        {dataGambar.map((item) => (
          <div
            key={item.id_galeri}
            className="h-auto bg-slate-500 shadow-md rounded mx-auto cursor-pointer"
          >
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Image src={item.path} alt="Image" width={300} height={300} />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{item.nama}</AlertDialogTitle>
                  <Image src={item.path} alt="Image" width={500} height={500} />
                  <AlertDialogDescription>{item.konten}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="w-full h-[40vh] image bg-cover px-24">
        <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
          Galeri Puskesmas
        </h1>
      </div>

      <div className="flex w-full justify-center my-10">
        <Link href="/galeri/gambar">
          <button className="border-2 border-red-300 text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 duration-300 font-bold py-2 px-4 rounded mr-2">
            Gambar
          </button>
        </Link>
        <Link href="/galeri/video">
          <button className="border-2 text-white bg-red-500 border-red-500 duration-300 font-bold py-2 px-4 rounded">
            Video
          </button>
        </Link>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {dataVideo.map((item) => (
            <div key={item.id_galeri} className="w-[360px] h-[203px] shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={item.path}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

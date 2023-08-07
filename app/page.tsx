import Image from "next/image";
import Link from "next/link";

import { AiFillCheckCircle, AiFillPlayCircle } from "react-icons/ai";
import {
  FaUserMd,
  FaTooth,
  FaChild,
  FaAmbulance,
  FaLungsVirus,
  FaUserNurse,
  FaFileMedical,
  FaWhatsappSquare,
} from "react-icons/fa"; // ikon dokter
import { IoWoman } from "react-icons/io5"; // ikon ibu
import { GiMedicines } from "react-icons/gi";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <>
      {/* -- Carousel -- */}
      <div className="w-full section_top lg:h-[100vh] h-[80vh] md:h-[85vh] bg-cover">
        <div className="w-full md:pl-24 h-full bg-gradient-to-r from-red-500 flex flex-col justify-center md:items-start items-center gap-4">
          <h1 className="md:text-5xl text-4xl font-bold text-center flex md:justify-start justify-start text-white w-[50%] md:w-[40%] lg:w-full pb-4">
            Selamat Datang di
          </h1>
          <h1 className="md:text-5xl text-4xl font-bold text-center flex md:justify-start justify-start text-white w-[50%] md:w-[40%] lg:w-full pb-4">
            UPTD Puskesmas Kertasemaya
          </h1>
          <h1 className="md:text-2xl text-lg font-bold text-center flex md:justify-start justify-start text-white w-[50%] md:w-[40%] lg:w-full pb-4">
            Web informasi, Data, Edukasi dan Umpan balik Kertasemaya
          </h1>
          <h1 className="flex gap-6 items-center">
            <Link href="https://webskrining.bpjs-kesehatan.go.id/skrining/index.html">
              <Button className="bg-red-200 text-red-600 font-bold hover:bg-red-600 hover:text-white">
                Skrining BPJS Kesehatan
              </Button>
            </Link>
            {/* <Link
              className="bg-red-900 border-white border-2 rounded-full p-1 text-white ml-6"
              href="https://www.youtube.com/@PuskesmasKertasemaya/"
            >
              <AiFillPlayCircle size={40} classname="border-2 border-black" />
            </Link> */}
            <Dialog>
              <DialogTrigger className="bg-red-900 border-white border-2 rounded-full p-1 text-white ml-6">
                <AiFillPlayCircle size={40} className="border-2 border-black" />
              </DialogTrigger>
              <DialogContent className="w-[64vw] h-[36vw]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QT1pgLjK4iI"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </DialogContent>
            </Dialog>

            <div className="text-white">Tonton Kami</div>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="lg:absolute lg:translate-y-[-200px] lg:translate-x-[-80px] flex flex-col gap-4 mt-4">
          <div className="">
            <div className="bg-red-200 text-red-600 p-4 flex flex-col gap-4">
              <div className="font-bold text-xl flex justify-between">
                <div>Layanan Call Center 24 Jam</div>
                <div>
                  <Link href="https://wa.me/6282118894770" target="_blank">
                    <Image
                      src="/social/whatsapp.png"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-red-200 text-red-600 flex-col flex p-12 font-bold">
              <div className="font-bold mb-4 text-2xl">Jam Pelayanan</div>
              <div className="flex justify-between border-red-600 border-b-2 text-lg">
                <div>Senin – Kamis</div>
                <div>07.30 -14.00 WIB</div>
              </div>
              <div className="flex justify-between border-red-600 border-b-2 text-lg">
                <div>Jumat</div>
                <div>07.30 -11.30 WIB</div>
              </div>
              <div className="flex justify-between border-red-600 text-lg">
                <div>Sabtu</div>
                <div>07.30 -12.00 WIB</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --Tentang Kami-- */}
      <div className=" w-full h-full py-20 md:pb-24 md:pt-60 flex justify-center">
        <div className="w-full h-full max-w-full grid lg:grid-cols-2 lg:px-[4%]">
          <div className="flex px-10 justify-center items-center lg:pr-5">
            <Image
              className="rounded-lg"
              src="/home/tentang_kami.jpeg"
              width={800}
              height={800}
              alt=""
            />
          </div>

          <div className="flex justify-center">
            <div className="flex items-center">
              <div className="flex pb-3 gap-2">
                <div className="gap-8 px-10">
                  <h1 className="text-xl mb-2 mt-10 lg:mt-0">Tentang Kami</h1>
                  <h1 className="font-bold text-4xl ">
                    UPTD Puskesmas Kertasemaya
                  </h1>
                  <p className="text-justify lg:text-lg py-10 md:py-15">
                    UPTD Puskesmas Kertasemaya adalah Unit Pelaksana Teknis
                    Daerah Kabupaten Indramayu yang bertempat di Kecamatan
                    Kertasemaya, Jl. By Pass Tulungagung dengan wilayah kerja
                    meliputi 13 desa, yaitu Desa Tulungagung, Kertasemaya,
                    Kliwed, Sukawera, Jengkok, Lemah Ayu, Manguntara,
                    Tegalwirangrong, Tenajar Kidul, Tenajar, Tenajar Lor, Jambe,
                    dan Larangan Jambe. Pelayanan yang diberikan oleh kami
                    adalah Pelayanan Rawat Jalan dalam Gedung dan Pelayanan Luar
                    Gedung yang didukung oleh aparatur kewilayahan setempat.
                    Kami selalu berupaya memberikan pelayanan prima dengan
                    sepenuh hati bagi para pengguna layanan kami.
                  </p>

                  <a href="/profil">
                    <Button className="transition-all bg-red-500 hover:translate-y-[-0.5rem] hover:bg-red-600 font-bold">
                      Informasi Lebih Lengkap
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-8 bg-red-200">
        <h1 className="md:text-6xl text-center font-bold text-5xl text-red-600">
          Jadwal Layanan
        </h1>
      </div>

      {/* --Jadwal Layanan-- */}
      <div>
        <div className=" w-full h-full py-20 md:py-24 lg:py-28 flex justify-center">
          <div className="w-full h-full flex max-w-full gap-10 lg:gap-16 flex-wrap justify-center">
            <div className="flex px-10 justify-center items-center lg:pr-5">
              <Image
                className="rounded-lg"
                src="/home/puskesmas_header.jpg"
                width={600}
                height={600}
                alt=""
              />
            </div>

            <div className="flex justify-center md:pr-10 lg:pl-5 px-5">
              <div className="grid grid-rows-3 items-center">
                <div className="flex pb-[1%] gap-2">
                  <AiFillCheckCircle color="rgb(239 68 68)" size="2rem" />
                  <div>
                    <h1 className="font-bold text-md md:text-lg lg:text-xl">
                      Pelayanan Rawat Jalan
                    </h1>
                    Pemeriksaan Umum: Senin - Sabtu <br />
                    Kesehatan Gigi dan Mulut: Senin - Kamis <br />
                    Pemeriksaan MTBS: Senin - Sabtu <br />
                  </div>
                </div>

                <div className="flex pb-4 gap-2">
                  <AiFillCheckCircle color="rgb(239 68 68)" size="2rem" />
                  <div>
                    <h1 className="font-bold text-xl">Konseling Terpadu</h1>
                    KIA/ Ibu Hamil: Selasa & Sabtu <br />
                    IMS/HIV: Senin - Sabtu <br />
                    Jiwa: Selasa, Kamis, & Sabtu <br />
                  </div>
                </div>

                <div className="flex gap-2">
                  <AiFillCheckCircle color="rgb(239 68 68)" size="2rem" />
                  <div>
                    <h1 className="font-bold text-xl">Lainnya</h1>
                    Laboratorium: Senin - Sabtu (Rabu di Pustu Tenajar)
                    <br />
                    Tindakan UGD: 24 jam
                    <br />
                    Persalinan: 24 jam
                    <br />
                    Ambulance: 24 jam
                    <br />
                  </div>
                </div>

                <a href="/pelayanan24">
                  <Button className="transition-all bg-red-500 hover:translate-y-[-0.5rem] hover:bg-red-600 p-5 w-full md:w-[60%] font-bold mt-10 lg:mt-14 flex">
                    Jadwal Pelayanan Lainnya
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-8 bg-red-200">
        <h1 className="md:text-6xl text-center font-bold text-5xl text-red-600">
          Layanan Puskesmas
        </h1>
      </div>

      {/* --Layanan-- */}
      <div className="w-full h-full bg-red-300 bg-opacity-[0.22] flex justify-center">
        <div className=" flex flex-wrap justify-around gap-4 lg:gap-5 px-10 py-10 lg:py-20 max-w-5xl">
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <FaUserMd size="5rem" />
              <p className="font-bold">Layanan Umum</p>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <FaTooth size="5rem" />
              <p className="font-bold">Layanan Kesehatan Gigi dan Mulut</p>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <IoWoman size="5rem" />
              <div className="font-bold">
                Layanan Kesehatan Ibu dan Anak (KIA)
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <FaChild size="5rem" />
              <p className="font-bold">
                Layanan Manajemen Terpadu Balita Sakit (MTBS)
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <FaAmbulance size="5rem" />
              <p className="font-bold">Layanan Gawat Darurat</p>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <FaLungsVirus size="5rem" />
              <p className="font-bold">Layanan Pemeriksaan TB Paru</p>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <GiMedicines size="5rem" />
              <p className="font-bold">Layanan Kefarmasian</p>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <FaFileMedical size="5rem" />
              <p className="font-bold">Layanan Laboratorium</p>
            </div>
          </div>
          <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <FaUserNurse size="5rem" />
              <p className="font-bold">Layanan Promosi Kesehatan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-8 bg-red-200">
        <h1 className="md:text-6xl text-center font-bold text-5xl text-red-600">
          Index Kepuasan
        </h1>
      </div>

      {/* --IKM-- */}
      <div className="w-full h-full flex items-center justify-center">
        {/* <div className="flex flex-wrap flex-row justify-around max-w-5xl h-full py-20 gap-[5%] sm:gap-[20%]"> */}
        <div className="flex flex-wrap flex-row items-center align-middle justify-center max-w-5xl h-full py-20 gap-14 md:gap-20 px-10">
          <Image
            className="h-full flex flex-initial rounded-lg object-cover shadow-2xl border-black border-solid bord"
            src="/home/ikm_1.jpg"
            width={300}
            height={300}
            alt=""
          />
          <Image
            className="h-full flex flex-initial rounded-lg object-cover shadow-2xl"
            src="/home/ikm_2.jpg"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

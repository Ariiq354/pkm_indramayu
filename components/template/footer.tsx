import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-red-900 text-white pt-20 pb-10">
        <div className="container flex flex-wrap md:justify-center justify-start p-4 gap-4">
          <div className="w-[48rem] ">
            <h3 className="text-white mb-4 font-bold text-3xl">
              Puskesmas Kertasemaya
            </h3>
            <div className="d-flex flex-column justify-content-start text-justify">
              <p>
                Portal <b>UPTD Puskesmas Kertasemaya</b> adalah suatu laporan
                puskesmas berbasis website yang dapat mempermudah masyarakat
                dalam mengenal dan mencaritahu berbagai hal, contohnya:
                Pelayanan, Jadwal, Berita, dll.
              </p>
            </div>
          </div>
          <div className="w-[18rem] ">
            <h3 className="text-white mb-4 text-3xl font-bold">
              Informasi Kontak
            </h3>
            <p className="flex items-center gap-2">
              <FaLocationDot />
              Jl. By Pass Tulungagung
            </p>
            <p className="flex items-center gap-2">
              <HiMail />
              puskes.kertasemaya@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone />
              0821-1889-4770
            </p>
          </div>
          <div className="w-[10rem]">
            <h3 className="text-white mb-4 text-3xl font-bold">Follow Us</h3>
            <div className="flex gap-6 text-white items-center">
              <Link
                href="https://www.facebook.com/puskesmas.kertasemaya.7"
                target="_blank"
              >
                <Image
                  src="/social/facebook.jpg"
                  width={50}
                  height={50}
                  alt=""
                />
              </Link>
              <Link
                href="https://www.instagram.com/puskesmas_kertasemaya/"
                target="_blank"
              >
                <Image
                  src="/social/instagram.png"
                  width={50}
                  height={50}
                  alt=""
                />
              </Link>
              <Link
                href="https://www.youtube.com/@PuskesmasKertasemaya"
                target="_blank"
              >
                <Image
                  src="/social/youtube.png"
                  width={50}
                  height={50}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

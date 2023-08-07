import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Pelayanan24() {
  return (
    <>
      <div className="bg-red-100 bg-opacity-60">
        <div className="w-full h-[40vh] image bg-cover px-24">
          <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
            Pelayanan Puskesmas
          </h1>
        </div>
        <div className="w-full flex justify-center py-10">
          <div className=" max-w-6xl flex flex-wrap justify-center gap-6">
            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/umum_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Umum</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/gigi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Gigi</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Kamis</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/balita_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Bayi-Balita</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/lansia_thumb.png"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Usia Lanjut</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/tb_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan TB Paru</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin & Jumat</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/kb_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan KB</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Selasa & Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/kia_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Konseling KIA</CardTitle>
                <CardDescription>LAYANAN KONSELING TERPADU</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Selasa & Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/kb_thumb.jpeg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Konseling KB</CardTitle>
                <CardDescription>LAYANAN KONSELING TERPADU</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin, Rabu, & Jumat</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/gizi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Konseling Gizi</CardTitle>
                <CardDescription>LAYANAN KONSELING TERPADU</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/haji_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Check-up Calon Haji</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/hiv_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Konseling</CardTitle>
                <CardDescription>LAYANAN KONSELING TERPADU</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/lab_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Laboratorium</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/farmasi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Kefarmasian</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/rujukan_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Rujukan</CardTitle>
                <CardDescription>LAYANAN RAWAT JALAN</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/ambulance_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Ambulance 24 Jam</CardTitle>
                <CardDescription>LAYANAN AMBULANCE</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pelayanan24/gawat_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Layanan Gawat Darurat 24 Jam</CardTitle>
                <CardDescription>LAYANAN AMBULANCE</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Sabtu</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

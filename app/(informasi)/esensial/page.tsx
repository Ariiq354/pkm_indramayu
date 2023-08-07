import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Inovasi() {
  return (
    <>
      <div className="bg-red-100 bg-opacity-60">
        <div className="w-full h-[40vh] image bg-cover px-24">
          <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
            Layanan Esensial
          </h1>
        </div>

        <div className="w-full flex justify-center ">
          <div className=" max-w-6xl flex flex-wrap my-10 justify-center gap-6">
            <Card>
              <CardHeader>
                <Image
                  src="/esensial/promosi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Promosi Kesehatan</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/promosi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan Lingkungan</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/kia_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan KIA</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/gizi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Gizi</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Senin - Sabtu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/promosi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>

                <CardTitle>Pencegahan dan Penularan Penyakit (P2P)</CardTitle>
                <CardDescription>Penyakit Menular</CardDescription>
              </CardHeader>
              <CardContent className="wrap">
                <p>
                  TB, HIV, Surveilans dan Imunisasi, Ispa, Diare, DBD,
                  Hepatitis, Kusta
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/promosi_thumb.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>

                <CardTitle>Pencegahan dan Penularan Penyakit (P2P)</CardTitle>
                <CardDescription>Penyakit Tidak Menular</CardDescription>
              </CardHeader>
              <CardContent className="font-2xl">
                <p>PTM (Penyakit Tidak Menular), Jiwa, Indera</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

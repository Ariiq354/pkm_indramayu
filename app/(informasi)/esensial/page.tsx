import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Esensial() {
  return (
    <>
      <div className="bg-red-100 bg-opacity-60">
        <div className="w-full h-[40vh] image bg-cover px-24">
          <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
            Pelayanan UKM Essensial
          </h1>
        </div>

        <div className="w-full flex justify-center ">
          <div className=" max-w-6xl flex flex-wrap my-10 justify-center gap-6">
            <Card>
              <CardHeader>
                <Image
                  src="/esensial/promosi.jpeg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Promosi Kesehatan</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/lingkungan.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan Lingkungan</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/kia.jpeg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan KIA</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/gizi.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Gizi</CardTitle>
                <CardDescription>UKM ESSENSIAL</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/esensial/menular.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>

                <CardTitle>
                  Pengendalian dan Pencegahan Penyakit Menular (P2PM)
                </CardTitle>
                <CardDescription>UKM Esensial</CardDescription>
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
                  src="/esensial/tidakMenular.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>

                <CardTitle>
                  Pencegahan dan Pengendalian Penyakit Tidak Menular (P2PTM)
                </CardTitle>
                <CardDescription>UKM Esensial</CardDescription>
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Pengembangan() {
  return (
    <>
      <div className="bg-red-100 bg-opacity-60">
        <div className="w-full h-[40vh] image bg-cover px-24">
          <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
            Pelayanan Usaha Kesehatan Masyarakat (UKM) Pengembangan
          </h1>
        </div>

        <div className="w-full flex justify-center py-10">
          <div className=" max-w-6xl flex flex-wrap justify-center gap-6">
            <Card>
              <CardHeader>
                <Image
                  src="/pengembangan/lansia.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan Lansia</CardTitle>
                <CardDescription>LAYANAN UKM PENGEMBANGAN</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pengembangan/perkesmas.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Perkesmas</CardTitle>
                <CardDescription>LAYANAN UKM PENGEMBANGAN</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pengembangan/sekolah_thumb2.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan Sekolah</CardTitle>
                <CardDescription>LAYANAN UKM PENGEMBANGAN</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pengembangan/gigi.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan Gigi Sekolah</CardTitle>
                <CardDescription>LAYANAN UKM PENGEMBANGAN</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/pengembangan/indera.jpeg"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                ></Image>
                <CardTitle>Kesehatan Indera</CardTitle>
                <CardDescription>LAYANAN UKM PENGEMBANGAN</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { formSchema } from "./auth";
import { input, z } from "zod";
import Image from "next/image";
import { Bold } from "lucide-react";

type Input = z.infer<typeof formSchema>;

const HubungiKami = () => {
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: "email N/A",
    //   fname: "fname N/A",
    //   lname: "lname N/A",
    //   number: "number N/A",
    //   message: "msg N/A",
    // },
  });

  console.log(form.watch());

  // function onSubmit(data: Input) {
  //   alert(JSON.stringify(data, null, 5));
  //   console.log(data);
  // }

  return (
    <>
      <div className="w-full h-[40vh] image bg-cover px-24">
        <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
          Hubungi Kami
        </h1>
      </div>
      <div className="container  rounded-lg p-12 gap-12 my-24 grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col w-full rounded-lg shadow-lg">
          <div className="flex p-3 bg-red-500 rounded-t-lg justify-center">
            <h5 className="text-2xl font-semibold text-white">Kontak</h5>
          </div>
          <div className="p-6 bg-red-100 rounded-b-lg w-full h-full grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
              <div>Whatsapp</div>
              <Link href="https://wa.me/6282118894770">
                <Image
                  src="/social/whatsapp.png"
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              </Link>
              <div>0821-1889-4770</div>
            </div>
            <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
              <div>Email</div>
              <Link
                className="h-[50px] flex items-center"
                href="mailto:puskes.kertasemaya@gmail.com"
              >
                <Image
                  src="/social/email.png"
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              </Link>
              <div>puskes.kertasemaya@gmail.com</div>
            </div>
            <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
              <div>Instagram</div>
              <Link
                target="_blank"
                href="https://www.instagram.com/puskesmas_kertasemaya/"
              >
                <Image
                  src="/social/instagram.png"
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              </Link>
              <div>puskesmas_kertasemaya</div>
            </div>
            <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
              <div>Facebook</div>
              <Link
                target="_blank"
                href="https://www.facebook.com/puskesmas.kertasemaya.7"
              >
                <Image
                  src="/social/facebook.jpg"
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              </Link>
              <div>Puskesmas Kertasemaya</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full rounded-lg shadow-lg">
          <div className="flex p-3 bg-red-500 rounded-t-lg justify-center">
            <h5 className="text-2xl font-semibold text-white">LOKASI</h5>
          </div>
          <div className="p-6 bg-red-100 rounded-b-lg w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8571906123275!2d108.34954167490773!3d-6.539712193453122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ec3724e2c674d%3A0xe7e272e1d2c60818!2sPuskesmas%20Kertasemaya!5e0!3m2!1sid!2sid!4v1691070672378!5m2!1sid!2sid"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container bg-red-100 rounded-lg p-12 gap-12 flex items-center flex-col mb-24 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-red-700 items-center justify-center">
            Kritik & Saran
          </h1>
        </div>

        <Form {...form}>
          <form
            action="https://formsubmit.co/puskes.kertasemaya+formsubmit@gmail.com"
            method="POST"
          // onSubmit={form.handleSubmit(onSubmit)}
          >
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
            ></input>
            <input
              type="text"
              name="_captcha"
              value={"false"}
              style={{ display: "none" }}
            ></input>
            <input type="hidden" name="_next" value="https://pkmkertasemaya.com/hubungikami/success"></input>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-[1%] md:gap-8">
              <div className="w-full flex gap-0 md:gap-4 flex-col justify-center my-16">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4  ">
                  <div className="grid w-auto">
                    <FormField
                      control={form.control}
                      name="Nama&nbsp;Depan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className="pl-2"
                            style={{ fontSize: "18px" }}
                          >
                            Nama Depan
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              id="fname"
                              placeholder="Nama Depan"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid w-auto gap-3">
                    <FormField
                      control={form.control}
                      name="Nama&nbsp;Belakang"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className="pl-2"
                            style={{ fontSize: "18px" }}
                          >
                            Nama Belakang
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              id="lname"
                              placeholder="Nama Belakang"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                  <div className="grid w-auto">
                    <FormField
                      control={form.control}
                      name="Alamat&nbsp;E-mail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className="pl-2"
                            style={{ fontSize: "18px" }}
                          >
                            E-mail
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              id="email"
                              placeholder="example@domain.com"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormDescription className="pl-3">
                            Contoh: example@domain.com
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid w-auto">
                    <FormField
                      control={form.control}
                      name="Nomor&nbsp;HP"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className="pl-2"
                            style={{ fontSize: "18px" }}
                          >
                            No. Telp
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              id="number"
                              placeholder="+62 813-1234-5678"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="md:mt-0">
                <div className="grid w-full gap-3">
                  <FormField
                    control={form.control}
                    name="Pesan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          className="pl-2"
                          style={{ fontSize: "20px" }}
                        >
                          Ulasan dan Masukan
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-white text-sm"
                            placeholder="Tulis Komplain atau Saran anda"
                            id="message"
                            style={{ fontSize: "17px" }}
                            rows={10}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p
                    className="text-sm text-muted-foreground text-justify font-light py-1 px-3"
                    style={{ fontSize: "16px" }}
                  >
                    Tanggapan Anda akan kami gunakan untuk meningkatkan layanan
                    kami di masa mendatang, Terima kasih.
                  </p>
                  <Button
                    className="bg-red-700 hover:bg-red-600"
                    type="submit"
                    style={{ fontSize: "18px" }}
                  >
                    Kirim Pesan
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>

      <div className="container bg-red-500 bg-opacity-80 rounded-lg p-12 gap-12 flex items-center flex-col mb-24 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Feedback
          </h1>
        </div>
        <div className="flex justify-center items-center w-full max-w-4xl">
          <iframe
            className="rounded-lg h-[500px] w-full"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQLJhR-Qee7_t81seKCxLYM9siCBu3XlO25DNWadOgRNTE7iK5Bvfu1sagr2vwSDg8THU6MKCqwT7R2/embed?start=true&loop=true&delayms=30000"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default HubungiKami;

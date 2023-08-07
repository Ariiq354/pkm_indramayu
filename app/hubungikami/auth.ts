import * as z from "zod";
import Link from "next/link";

export const formSchema = z.object({
  "Alamat&nbsp;E-mail": z.string().email(),
  "Nama&nbsp;Depan": z
    .string()
    .min(2, { message: "Nama Depan Anda terlalu pendek!" })
    .max(255),
  "Nama&nbsp;Belakang": z.string().min(2).max(255),
  "Nomor&nbsp;HP": z.string().min(10).max(20),
  Pesan: z.string().min(5).max(500),
});

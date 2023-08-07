"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Galeri() {
  const router = useRouter();

  useEffect(() => {
    // Check if running on the client-side before using useRouter
    if (typeof window !== 'undefined') {
      // Redirect to "/galeri/gambar" after 3 seconds (adjust the delay as needed)
      const redirectTimer = setTimeout(() => {
        router.push('/galeri/gambar');
      });

      return () => {
        clearTimeout(redirectTimer);
      };
    }
  }, [router]);

  return (
    <>

    </>
  );
}

"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import ClientLayout from '@/layout/client/ClientLayout';

export default function Home() {

  return (
    <ClientLayout>
      <div>Client Dashboard</div>
    </ClientLayout>
  )
}

import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Buat Request | IDC",
};

export default function FormPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/home" className="link-back">
          <FiArrowLeft className="size-4" aria-hidden />
          Kembali ke daftar
        </Link>
        <h1 className="page-title mt-2">Buat Request Baru</h1>
      </div>
      <div className="card text-center text-slate-500">
        Form request segera hadir.
      </div>
    </div>
  );
}

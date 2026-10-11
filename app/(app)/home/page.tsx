import type { Metadata } from "next";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { DUMMY_REQUESTS, type RequestStatus } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Request | IDC",
};

const STATUS_BADGE: Record<RequestStatus, string> = {
  Menunggu: "badge-warning",
  Diproses: "badge-info",
  Selesai: "badge-success",
  Dibatalkan: "badge-danger",
};

const dateTimeFormat = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Jakarta",
});

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="page-title">Daftar Request</h1>
        <Link href="/form" className="btn-primary">
          <FiPlus className="size-5" aria-hidden />
          Buat Baru
        </Link>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>No Pemeriksaan</th>
              <th>Tanggal &amp; Waktu</th>
              <th>Nama Pasien</th>
              <th>No Rekam Medis</th>
              <th>Nama Dokter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_REQUESTS.map((request) => (
              <tr key={request.examinationNo}>
                <td className="font-medium text-slate-900">{request.examinationNo}</td>
                <td>{dateTimeFormat.format(new Date(request.dateTime))}</td>
                <td>{request.patientName}</td>
                <td className="tabular-nums">{request.medicalRecordNo}</td>
                <td>{request.doctorName}</td>
                <td>
                  <span className={`badge ${STATUS_BADGE[request.status]}`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

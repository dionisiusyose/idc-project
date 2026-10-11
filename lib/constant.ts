import "server-only";

export type Role = "admin" | "apoteker";

export const ROLE_LABELS: Record<Role, string> = {
  admin: "Admin",
  apoteker: "Apoteker",
};

export type DummyAccount = {
  username: string;
  password: string;
  name: string;
  role: Role;
};

// Dummy accounts for development only. Replace with a real auth backend.
// "server-only" keeps this file (and the passwords) out of the browser bundle.
export const DUMMY_ACCOUNTS: DummyAccount[] = [
  { username: "admin", password: "admin123", name: "Administrator", role: "admin" },
  { username: "apoteker", password: "apoteker123", name: "John Doe", role: "apoteker" },
];

export const HOME_ROUTE = "/home";
export const LOGIN_ROUTE = "/login";
export const SESSION_COOKIE = "idc_session";

export type RequestStatus = "Menunggu" | "Diproses" | "Selesai" | "Dibatalkan";

export type PharmacyRequest = {
  examinationNo: string;
  dateTime: string; // ISO 8601
  patientName: string;
  medicalRecordNo: string;
  doctorName: string;
  status: RequestStatus;
};

export const DUMMY_REQUESTS: PharmacyRequest[] = [
  {
    examinationNo: "PMR-2026-0001",
    dateTime: "2026-10-11T08:15:00+07:00",
    patientName: "Budi Santoso",
    medicalRecordNo: "RM-00012345",
    doctorName: "dr. Andi Wijaya, Sp.PD",
    status: "Menunggu",
  },
  {
    examinationNo: "PMR-2026-0002",
    dateTime: "2026-10-11T08:40:00+07:00",
    patientName: "Siti Rahmawati",
    medicalRecordNo: "RM-00012346",
    doctorName: "dr. Maria Lestari, Sp.A",
    status: "Diproses",
  },
  {
    examinationNo: "PMR-2026-0003",
    dateTime: "2026-10-11T09:05:00+07:00",
    patientName: "Ahmad Fauzi",
    medicalRecordNo: "RM-00012347",
    doctorName: "dr. Andi Wijaya, Sp.PD",
    status: "Selesai",
  },
  {
    examinationNo: "PMR-2026-0004",
    dateTime: "2026-10-11T09:30:00+07:00",
    patientName: "Dewi Kusuma",
    medicalRecordNo: "RM-00012348",
    doctorName: "dr. Rudi Hartono, Sp.JP",
    status: "Selesai",
  },
  {
    examinationNo: "PMR-2026-0005",
    dateTime: "2026-10-11T10:10:00+07:00",
    patientName: "Rina Marlina",
    medicalRecordNo: "RM-00012349",
    doctorName: "dr. Maria Lestari, Sp.A",
    status: "Dibatalkan",
  },
  {
    examinationNo: "PMR-2026-0006",
    dateTime: "2026-10-11T10:45:00+07:00",
    patientName: "Hendra Gunawan",
    medicalRecordNo: "RM-00012350",
    doctorName: "dr. Rudi Hartono, Sp.JP",
    status: "Diproses",
  },
  {
    examinationNo: "PMR-2026-0007",
    dateTime: "2026-10-11T11:20:00+07:00",
    patientName: "Lina Susanti",
    medicalRecordNo: "RM-00012351",
    doctorName: "dr. Andi Wijaya, Sp.PD",
    status: "Menunggu",
  },
];

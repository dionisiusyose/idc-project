import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | IDC",
};

// Admin-only: proxy.ts redirects other roles to /home.
export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="page-title">Settings</h1>
      <div className="card text-center text-slate-500">
        Halaman settings segera hadir.
      </div>
    </div>
  );
}

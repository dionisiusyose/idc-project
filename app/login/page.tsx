import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login | IDC",
};

export default function LoginPage() {
  return (
    <main className="page-soft flex flex-1 items-center justify-center px-4 py-16">
      <div className="card flex w-full max-w-md animate-fade-up flex-col items-center gap-10 motion-reduce:animate-none">
        <Logo className="h-14 w-auto" />
        <LoginForm />
      </div>
    </main>
  );
}

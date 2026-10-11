import { redirect } from "next/navigation";

// Login is the entry point for now. Replace this with the dashboard later.
export default function Home() {
  redirect("/login");
}

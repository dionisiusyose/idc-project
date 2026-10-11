import { ROLE_LABELS } from "@/lib/constant";
import { getCurrentUser } from "@/lib/session";
import { LogoutButton } from "./LogoutButton";
import { NavLinks } from "./NavLinks";

export async function HeaderUser() {
  const user = await getCurrentUser();

  return (
    <>
      {/* The navbar is admin-only */}
      {user.role === "admin" ? <NavLinks /> : <div className="flex-1" />}

      <div className="flex items-center gap-3">
        <div className="text-right leading-tight">
          <p className="text-sm text-slate-900">Hello, {user.name}</p>
          <p className="text-xs text-slate-500">
            Role: <span className="font-semibold text-slate-700">{ROLE_LABELS[user.role]}</span>
          </p>
        </div>
        <LogoutButton />
      </div>
    </>
  );
}

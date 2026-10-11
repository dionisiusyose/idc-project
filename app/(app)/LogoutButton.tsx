"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { FiLogOut } from "react-icons/fi";
import { logout } from "./actions";

export function LogoutButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="btn-icon btn-icon-danger"
        aria-label="Logout"
        title="Logout"
        onClick={() => dialogRef.current?.showModal()}
      >
        <FiLogOut className="size-5" aria-hidden />
      </button>

      {/* Native <dialog>: Esc closes it and focus stays inside while open */}
      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby="logout-title"
        onClick={(e) => {
          // Clicking the blurred backdrop (the dialog itself) closes it
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <div className="flex flex-col items-center gap-4 p-8 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
            <FiLogOut className="size-6" aria-hidden />
          </span>
          <div className="flex flex-col gap-1">
            <h2 id="logout-title" className="text-lg font-semibold text-slate-900">
              Log out
            </h2>
            <p className="text-sm text-slate-600">Are you sure you want to log out?</p>
          </div>
          <form action={logout} className="mt-2 flex w-full gap-3">
            <button
              type="button"
              className="btn-secondary flex-1"
              onClick={() => dialogRef.current?.close()}
              autoFocus
            >
              Cancel
            </button>
            <ConfirmButton />
          </form>
        </div>
      </dialog>
    </>
  );
}

function ConfirmButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-danger flex-1" disabled={pending}>
      {pending ? "Logging out..." : "Log out"}
    </button>
  );
}

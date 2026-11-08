"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm grid grid-cols-1 gap-1">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        defaultValue={profile.password}
        placeholder="password"
        type="password"
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        defaultValue={profile.firstName}
        placeholder="First Name"
        id="wd-firstname"
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        defaultValue={profile.lastName}
        placeholder="Last Name"
        id="wd-lastname"
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        defaultValue={profile.email}
        type="email"
        id="wd-email"
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <select
        defaultValue={profile.role}
        id="wd-role"
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="mb-2 block w-full rounded bg-red-700 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </button>
    </div>
  );
}
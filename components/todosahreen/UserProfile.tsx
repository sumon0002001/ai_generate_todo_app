"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
  const session = useSession();
  return (
    <div>
      <Image
        src={session?.data?.user?.image}
        alt="profile pic"
        width={24}
        height={24}
        className="rounded-full"
      />
    </div>
  );
};

export default UserProfile;

import React from "react";

function UserCard({ user }) {
  return (
    <div className="xs:col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 3xl:col-span-2 flex justify-start items-center gap-5 border border-zinc-300 p-5 rounded-lg bg-white">
      {/* user avatar */}
      <img
        src={`/avatars/${user.gender}/${user.avatar}.png`}
        alt={user.name}
        className="w-14 h-14 rounded-full mr-4"
      />
      {/* user info */}
      <div className="flex flex-col justify-start items-start">
        {/* user first name */}
        <p>
          <span>نام: </span>
          <span>{user.firstName}</span>
        </p>
        {/* user last name */}
        <p>
          <span>نام خانوادگی: </span>
          <span>{user.lastName}</span>
        </p>
      </div>
      <span>{user.name}</span>
    </div>
  );
}

export default UserCard;

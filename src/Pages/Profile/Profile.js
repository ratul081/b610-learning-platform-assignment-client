import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {
    displayName,
    email,
    emailVerified,
    metadata,
    photoURL,
    uid,
    isAnonymous,
  } = user;
  const { creationTime, lastSignInTime } = metadata;
  return (
    <div className="min-h-screen lg:m-12 m-4 space-y-6">
      <p className="lg:text-6xl text-2xl">Here your profile</p>
      <div className="grid place-items-center">
        <img
          className="rounded my-12 w-56 lg:max-w-7xl h-auto object-fill"
          src={
            photoURL
              ? photoURL
              : "https://i.postimg.cc/kXm44xCH/1b96ad1f07feee81fa83c877a1e350ce.png"
          }
          alt=""
        />
        <div className="text-lg lg:text-2xl space-y-4">
          <p>
            <span className="font-semibold">Name:</span> {displayName}
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            {email}
          </p>
          <p>
            <span className="font-semibold">Id No: </span>
            {uid}
          </p>
          <p>
            <span className="font-semibold">Email status: </span>
            {emailVerified ? "verified" : "unverified"}
          </p>
          <p>
            <span className="font-semibold">Anonymous: </span>
            {isAnonymous ? "Yes" : "No"}
          </p>
          <p>
            <span className="font-semibold">Created on: </span>
            {creationTime}
          </p>
          <p>
            <span className="font-semibold">Last sing in: </span>
            {lastSignInTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

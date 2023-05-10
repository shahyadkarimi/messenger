import React, { useState } from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 097b892fd65ee1cdf1dcf07cd23afe1cf3adec48
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"

const Register = () => {
  const [err, setErr] = useState(false);

<<<<<<< HEAD
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

=======
  const submitHandler = async (e) => {
    e.preventDefault();

>>>>>>> 097b892fd65ee1cdf1dcf07cd23afe1cf3adec48
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const profile = e.target[3].files[0];

    try {
      // create account
      const res = await createUserWithEmailAndPassword(auth, email, password);

<<<<<<< HEAD
      // create a ref and image name
      const storageRef = ref(storage, username);
      // upload image
=======
      const storageRef = ref(storage, username);
>>>>>>> 097b892fd65ee1cdf1dcf07cd23afe1cf3adec48
      const uploadTask = uploadBytesResumable(storageRef, profile);

      uploadTask.on(
        (err) => {
<<<<<<< HEAD
          console.log(err)
        },
        () => {
          // get uploaded image download link
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            // update user info and add username & profile image link
=======
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
>>>>>>> 097b892fd65ee1cdf1dcf07cd23afe1cf3adec48
            await updateProfile(res.user, {
                displayName: username,
                photoURL: downloadURL,
            })

<<<<<<< HEAD
            // add user to database
=======
>>>>>>> 097b892fd65ee1cdf1dcf07cd23afe1cf3adec48
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: username,
              email,
              photoURL: downloadURL
            })
<<<<<<< HEAD

            // create chat
            await setDoc(doc(db, "userChats", res.user.uid), {})
            
            navigate("/")
=======
>>>>>>> 097b892fd65ee1cdf1dcf07cd23afe1cf3adec48
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="w-96 h-auto bg-gray-dark rounded-3xl flex items-center flex-col p-4">
      <h1 className="text-2xl font-semibold text-light">Messenger</h1>
      <span className="text-light mt-2 block">Register</span>
      <form
        className="w-full px-4 flex flex-col gap-6"
        onSubmit={submitHandler}
      >
        <input
          className="bg-gray-dark h-10 w-full text-light outline-none border-b-2 placeholder:text-light focus:border-b-[#6b8afd] focus:placeholder:text-[#6b8afd] placeholder:transition placeholder:duration-200 transition-all duration-200"
          placeholder="Username"
          type="text"
        />
        <input
          className="bg-gray-dark h-10 w-full text-light outline-none border-b-2 placeholder:text-light focus:border-b-[#6b8afd] focus:placeholder:text-[#6b8afd] placeholder:transition placeholder:duration-200 transition-all duration-200"
          placeholder="Email"
          type="email"
        />
        <input
          className="bg-gray-dark h-10 w-full text-light outline-none border-b-2 placeholder:text-light focus:border-b-[#6b8afd] focus:placeholder:text-[#6b8afd] placeholder:transition placeholder:duration-200 transition-all duration-200"
          placeholder="Password"
          type="password"
        />
        <input type="file" className="hidden" id="profile-pic" />
        <label
          htmlFor="profile-pic"
          className="flex items-center gap-2 text-light w-fit text-sm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 stroke-light"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <span>Add profile picture</span>
        </label>

        <button className="bg-[#6b8afd] text-[#fff] py-2 rounded-lg">
          Sign Up
        </button>
      </form>
      {err && <span>Somthing Wrong !</span>}
      <p className="mt-6 text-light text-sm">
        Do you have an account ?{" "}
        <Link to="/login" className="text-base text-[#6b8afd] ml-1">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;

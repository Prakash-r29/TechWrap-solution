import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../Firebase/Firebase";


// =============================
// REGISTER
// =============================

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    email,
    role: "user",
    dashboard: "user",
    createdAt: serverTimestamp(),
  });

  return user;
};


// =============================
// LOGIN
// =============================

export const loginUser = async (
  email: string,
  password: string
) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};


// =============================
// GET USER PROFILE
// =============================

export const getUserProfile = async (uid: string) => {
  const userDoc = await getDoc(doc(db, "users", uid));

  if (!userDoc.exists()) {
    return null;
  }

  return userDoc.data();
};


// =============================
// LOGOUT
// =============================

export const logoutUser = async () => {
  await signOut(auth);
};
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

// ✅ Register Doctor
export const registerDoctor = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "doctors", user.uid), {
      uid: user.uid,
      displayName,
      email: user.email,
      role: "doctor",
      createdAt: new Date(),
    });

    return { success: true };

  } catch (error) {
    return { success: false, message: error.message };
  }
};

// ✅ Login Doctor
export const loginDoctor = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    const doctorDoc = await getDoc(doc(db, "doctors", user.uid));

    if (!doctorDoc.exists()) {
      return { success: false, message: "Not a doctor account" };
    }

    return { success: true, user };

  } catch (error) {
    return { success: false, message: error.message };
  }
};

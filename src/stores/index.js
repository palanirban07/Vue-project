import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthstore = defineStore("authstore", () => {
  const user = ref({});
  const router = useRouter();
  const init = ()=> {
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        const uid = userDetails.uid;
        user.value = { email: userDetails.email, uid };
        router.push({ name: 'home' });
      } else {
        user.value = {};
        router.replace({name: 'Login'})
      }
    });
  }

  const registerUser = (credentials) => {
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.message)
        // ..
      });
  };

  const loginUser = (credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logoutUser = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error.message)
    });
  }

  return {
    registerUser,
    loginUser,
    logoutUser,
    init,
    user
  };
});

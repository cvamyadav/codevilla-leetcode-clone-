import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const provider = new GoogleAuthProvider();

export const Signin = () => {
  const auth = getAuth();
  const [error, setError] = useState(""); // State for handling errors

  async function onSignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) return;

        const token = credential.accessToken;
        const user = result.user;

      // console.log("User signed in:", user, "Token:", token);
      })
      .catch((error) => {
        // Handle Errors here.
        setError(error.message); // Set the error message to state
        // console.error("Error during sign-in:", error);
      });

  }



  return (
    <>
        <div>
          <div className="w-full flex justify-center items-center h-screen gap-10 bg-gray-100">
                <div className="gap-4 ">
                <h1 className="text-4xl font-bold">CODVILLA</h1>
                </div>


                <div className="flex bg-grey g-10">
                    <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                      <h1 className="text-2xl font-bold mb-4 text-center">Login to continue with Codvilla</h1>
                      <button
                        onClick={onSignin}
                        className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded"
                      >
                        Sign in with Google
                      </button>
                      {error && (
                        <p className="mt-4 text-sm text-red-500 text-center">{error}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div/>
            </div>
    
    </>
    
  );
};




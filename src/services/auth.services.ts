import auth from '@react-native-firebase/auth';
import { setAuthInitialState } from '../rtk';

async function createUserWithFirebase(email: string, password: string) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log('User account created & signed in!');
      console.log('Sign up successfull! ', response);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}
async function loginWithFirebase(email: string, password: string) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log('User account created & signed in!');
      console.log('Sign in successfull! ', response);
      setAuthInitialState({
        name: '',
        lastname: '',
        email: response.user.email ?? '',
        firebaseID: response.user.uid,
        isLogged: true,
        firebaseToken: '',
        image: '',
      });
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is not valid!');
      }

      if (error.code === 'auth/user-disabled') {
        console.log('That email address is disable!');
      }
      if (error.code === 'auth/user-not-found') {
        console.log('User not found!');
      }
      if (error.code === 'auth/wrong-password') {
        console.log('That password is incorrect!');
      }
      if (error.code === 'auth/invalid-credential') {
        console.log('That supplied auth credential is incorrect, malformed or has expired!');
      }

      console.log("auth error:", error)
    });
}

async function forgotPassword(email: string) {
  //   const actionCodeSettings = {
  //     // URL you want to redirect back to. The domain (www.example.com) for this
  //     // URL must be whitelisted in the Firebase Console.
  //     url: 'showapp-fbe93.web.app',
  //     // This must be true.
  //     handleCodeInApp: true,
  //     iOS: {
  //       bundleId: 'org.bessel.2show',
  //     },
  //     android: {
  //       packageName: 'com.twoshowapp',
  //       installApp: true,
  //       minimumVersion: '12',
  //     },
  //   };
  //add actioncodesetting to sendpasswordreset email in order to receive a code
  auth()
    .sendPasswordResetEmail(email)
    .then(response => {
      console.log('We send a code to reset your password!');
      console.log('Reset password ', response);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}
async function resetPassword(code: string, newpwd: string) {
  auth()
    .confirmPasswordReset(code, newpwd)
    .then(response => console.log('Password updated successfully! ', response))
    .catch(error => {
      if (error.code === 'auth/expired-action-code') {
        console.log('The password reset code has expired.!');
      }
      if (error.code === 'auth/invalid-action-code') {
        console.log('The password reset code is invalid!');
      }
      if (error.code === 'auth/invalid-action-code') {
        console.log('The password reset code is invalid!');
      }
      if (error.code === 'auth/user-disabled') {
        console.log('That email address is disable!');
      }
      if (error.code === 'auth/user-not-found') {
        console.log('No user corresponding to the password reset code!');
      }
      if (error.code === 'auth/weak-password') {
        console.log('The new password is not strong enough.!');
      }

      console.error(error);
    });
}

export async function logOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

export const authServices = {
  createUserWithFirebase,
  loginWithFirebase,
  logOut,
  forgotPassword,
  resetPassword,
};

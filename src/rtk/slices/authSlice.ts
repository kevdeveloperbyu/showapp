import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthDataInterface} from '../types/auth.types';

const initalState: AuthDataInterface|any = {
  name: '',
  lastname: '',
  email: '',
  firebaseID: '',
  isLogged: false,
  firebaseToken: '',
  image: '',
};

//create the slice of user, configure initial state and reducers

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: initalState,
    loading: false,
  },
  reducers: {
    setAuthInitialState(state) {
      state.user = {...initalState};
      state.loading = false;
    },
    setFullName(state, action: PayloadAction<AuthDataInterface>) {
      state.user.name = action.payload.name;
      state.user.lastname = action.payload.lastname;
    },
    setImage(state, action: PayloadAction<AuthDataInterface>) {
      state.user.image = action.payload.image;
    },

    setBirthday(state, action: PayloadAction<AuthDataInterface>) {
      state.user.birthday = action.payload.birthday;
    },
    setIsLogged(state, action: PayloadAction<AuthDataInterface>) {
      state.user.isLogged = action.payload.isLogged;
    },
    setFirebaseID(state, action: PayloadAction<AuthDataInterface>) {
      state.user.firebaseID = action.payload.firebaseID;
    },
    setFirebaseToken(state, action: PayloadAction<AuthDataInterface>) {
      state.user.firebaseToken = action.payload.firebaseToken;
    },
  },
});

export const {
  setAuthInitialState,
  setBirthday,
  setFirebaseID,
  setFirebaseToken,
  setFullName,
  setImage,
  setIsLogged,
} = authSlice.actions;
export default authSlice.reducer;

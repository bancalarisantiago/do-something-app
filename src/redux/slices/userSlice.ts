import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { createUserAccount } from '../../api/auth';

//Types
import { UserType } from '../../types';

interface InitialState {
  user: UserType;
}

const initialState: InitialState = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    age: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteAccount(state, action: PayloadAction) {
      return { ...state };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, actions) => {
      state.user = actions.payload;
    })
    builder.addCase(getUserFromStore.fulfilled, (state, actions) => {
      state.user;
    })

  },
})

export const signUp = createAsyncThunk(
  'user/signUp',
  async (userData: UserType) => {
    const user = createUserAccount(userData);
    return user
  }
)

export const getUserFromStore = createAsyncThunk(
  'user/getUserFromStore',
  async () => {

  }
)

// export const logIn = createAsyncThunk(
//   'auth/logIn',
//   async (filter: any) => {
//     const activity = fetchActivityByFilter(filter);
//     return activity
//   }
// )

// export const logOut = createAsyncThunk(
//   'auth/logOut',
//   async (filter: any) => {
//     const activity = fetchActivityByFilter(filter);
//     return activity
//   }
// )


export const {
  deleteAccount,
} = userSlice.actions;

export default userSlice.reducer;
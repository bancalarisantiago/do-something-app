import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { createUserAccount } from '../../api/auth';

//Types
import { UserType } from '../../types';
import { createTokenProvider } from '../../api/tokenProvider';

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
    deleteAccount: (state, action: PayloadAction) => {
      return { ...state };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, actions) => {
      state.user = actions.payload;
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

export const logIn = createAsyncThunk(
  'auth/logIn',
  async () => {
    const { setToken } = createTokenProvider();
    setToken("userTOKEN")
    return true
  }
)

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
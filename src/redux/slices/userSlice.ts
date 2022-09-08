import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { createUserAccount } from '../../api/auth';



const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteAccount(state, action: any) {
      console.log(action.payload)
      return { ...state };
    },

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signUp.fulfilled, (state, actions) => {
      state.user = actions.payload;
    })
  },
})

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData: any) => {
    const user = createUserAccount(userData);
    return user
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
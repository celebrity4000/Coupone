import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  _id: string;
  userEmail: string;
  userCountrycode: string;
  userPhone: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  houseNo: number;
  citytownvillage: string;
  district: string;
  state: string;
  country: string;
}

const initialState: UserState = {
  _id: "",
  userEmail: "",
  userCountrycode: "",
  userPhone: "",
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  houseNo: 0,
  citytownvillage: "",
  district: "",
  state: "",
  country: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

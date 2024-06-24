import { createSlice } from "@reduxjs/toolkit";
// "id": 1,
// "nomEtPrenom": "Amin Sallemi",
// "email": "Amin@gmail.com",
// "dateDeReunion": "30/02/2024 08:00",
// "status": "Accepté",

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
        state.users = action.payload.users;
    }
  },
});

export const { setUsers } = usersSlice.actions;
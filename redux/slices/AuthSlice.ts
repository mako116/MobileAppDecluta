import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

interface AuthState {
    name:string
     email: string
    token: string | null;
    userData: UserData | null; 
    phone?:string;
    lastLogin: number | null; // Store timestamp
}

interface UserData {
    _id: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    address?:string;
    BankVerificationNumberVerified?:boolean;
    NationalIdentityNumberVerified?:boolean;
    state?:string;
    city?:string;
    lastName:string;
    firstName:string;
    email: string;
    password:string;
    phone:string;
    name: string;
    profileImage: string;
}
 

const initialState: AuthState = {
    name: '',
    email: '',
    token: null,
    userData: null,
    lastLogin: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAuthData: (state, action: PayloadAction<{ token: string; user: UserData }>) => {
            state.token = action.payload.token;
            state.userData = action.payload.user;
            state.lastLogin = Date.now();
        },
        clearAuthData: () => {
            // Reset the state to the initial state when clearing data
            return initialState;
        },
        updateUserData: (state, action: PayloadAction<Partial<UserData>>) => {
            if (state.userData ) {
                const { name, email, 
                    password, createdAt, phone, firstName, lastName } = action.payload;
                     if (firstName !== undefined) state.userData.firstName = firstName;
                     if (lastName !== undefined) state.userData.lastName = lastName;
     
                if (phone !== undefined) state.userData.phone = phone;
                if (password !== undefined) state.userData.password = password;
                if (name !== undefined) state.userData.name = name;
                if (createdAt !== undefined) state.userData.createdAt = createdAt;
                if (email !== undefined) state.userData.email = email;
                if (phone !== undefined) state.userData.phone = phone;
            }
        },
        logout: (state) => {
            state.token = null;
            state.userData = null;
            state.lastLogin = null;
        },
    },
    
});

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['token', 'userData', 'lastLogin'], // Persist token and last login
};

export const { 
    setAuthData, 
    setEmail, 
    clearAuthData, 
    updateUserData,
    logout
} = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);
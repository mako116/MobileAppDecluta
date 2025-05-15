import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

interface AuthState {
    name: string;
    email: string;
    token: string | null;
    userData: UserData | null; 
    phoneNumber?: string;
    lastLogin: number | null; // Store timestamp
}

interface UserData {
    _id: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    address?: string;
    BankVerificationNumberVerified?: boolean;
    NationalIdentityNumberVerified?: boolean;
    state?: string;
    city?: string;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    phoneNumber: string;
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
        setAuthData: (state, action: PayloadAction<{ token: string; user: UserData }>) => {
            state.token = action.payload.token;
            state.userData = action.payload.user;
            state.email = action.payload.user.email;
            state.lastLogin = Date.now(); // Store timestamp

            // Save to AsyncStorage
            AsyncStorage.setItem('token', action.payload.token);
            AsyncStorage.setItem('email', action.payload.user.email);
            AsyncStorage.setItem('lastLogin', JSON.stringify(state.lastLogin));
        },
        clearAuthData: (state) => {
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('email');
            AsyncStorage.removeItem('lastLogin');

            return initialState;
        },
        updateUserData: (state, action: PayloadAction<Partial<UserData>>) => {
            if (state.userData) {
                const { name, email, password, createdAt, phoneNumber, firstName, lastName } = action.payload;
                if (firstName !== undefined) state.userData.firstName = firstName;
                if (lastName !== undefined) state.userData.lastName = lastName;
                if (phoneNumber !== undefined) state.userData.phoneNumber = phoneNumber;
                if (password !== undefined) state.userData.password = password;
                if (name !== undefined) state.userData.name = name;
                if (createdAt !== undefined) state.userData.createdAt = createdAt;
                if (email !== undefined) state.userData.email = email;
                if (phoneNumber !== undefined) state.userData.phoneNumber = phoneNumber;
            }
        },
        logout: (state) => {
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('email');
            AsyncStorage.removeItem('lastLogin');

            state.token = null;
            state.userData = null;
            state.lastLogin = null;
        },
    },
});

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['token', 'userData', 'lastLogin', 'email'], // Persist email
};

export const { setAuthData, clearAuthData, updateUserData, logout } = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);

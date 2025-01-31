import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    phone: string;
    email: string
    token: string | null;
    userData: UserData | null; 
}

interface UserData {
  _id: string;
  phone: string;
  hasSubscription: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  businessName: string;
  trialActivated?: boolean;
  trialEndDate?: number;
  email: string;
  firstName: string;
    lastName: string;
    subscriptionPlan: string;
    lastPayment: number;
    pepcodeId: string;
    logo: string;
    duration: number
}


const initialState: AuthState = {
    phone: '',
    email: '',
    token: null,
    userData: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAuthData: (state, action: PayloadAction<{ token: string; data: UserData }>) => {
            state.token = action.payload.token;
            state.userData = action.payload.data;
        },
        clearAuthData: () => {
            // Reset the state to the initial state when clearing data
            return initialState;
        },
        updateUserData: (state, action: PayloadAction<Partial<UserData>>) => {
            if (state.userData ) {
                const { firstName, lastName, email, phone, trialActivated } = action.payload;
                if (firstName !== undefined) state.userData.firstName = firstName;
                if (lastName !== undefined) state.userData.lastName = lastName;
                if (email !== undefined) state.userData.email = email;
                if (phone !== undefined) state.userData.phone = phone;
                if (trialActivated !== undefined) state.userData.trialActivated = trialActivated;
            }
        }
    },
    
});

export const { setPhone, setAuthData, setEmail, clearAuthData, updateUserData } = authSlice.actions;
export default authSlice.reducer;

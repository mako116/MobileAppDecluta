import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from "react-native"
import IdentityKyc from 'react-native-identity-kyc';
import React, { ReactNode, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import KycSignup from "@/styles/Kyc/signup.styles";

// Define the types for the state and props
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

// Error Boundary Component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong: {this.state.error?.message}</Text>;
    }

    return this.props.children;
  }
}

const FaceVerification: React.FC = () => {
  const [buttonSpinner, setButtonSpinner] = useState(false);
  
  useEffect(() => {
    const socket: Socket = io('https://d469-105-113-18-10.ngrok-free.app/');

    // Your socket event listeners here
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    // Cleanup function to close the socket connection
    return () => {
      socket.disconnect();
      console.log('Disconnected from socket server');
    };
  }, []);

    return(
      <ErrorBoundary>
        <IdentityKyc
          uri="https://api.prembly.com/"
          loaderColor={'red'}
          buttonText={'Verify'}
          showDefaultButton={true}
          merchant_key="live_pk_E9RdleBxW87j4bEpEY5Xc571yfEaZ0WGOMm7Q5G"
          first_name="david"
          last_name="akinola"
          email="dev.akinoladavid@yahoo.com"
          config_id="65be8b0d-9223-4d40-9695-eed3c5400712"
          is_test={false}
          user_ref="1234357314314"
          onCancel={(data: any) => {
            console.log(data);
          }}
          onVerified={(data: any) => {
            console.log(data);
          }}
          onError={(data: any) => {
            console.log(data);
          }}
          customButton={onPress => (
          <TouchableOpacity onPress={onPress} style={[
            KycSignup.button,{marginBottom:20}
           ]}>
              {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text
              style={[
                KycSignup.buttonText,
               ]}
            >
              Verify Now
            </Text>
          )}
          </TouchableOpacity>
          )}
        />
      
      </ErrorBoundary>
      
    )
}

export default FaceVerification;


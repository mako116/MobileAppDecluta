import { SignUpStyles } from "@/styles/Signup/signup.style"
import { Image, Text, TouchableOpacity } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from "react";
import axios from "axios";

const GoolgSignUp:React.FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '850314571191-0jpd0vab9srsve44370p7tc875tftqee.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@dev.david/decluttaking-mobileapp',
    scopes: ['profile', 'email'],
  });

  // Handle Response
  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      console.log('access token', access_token)

      // Post to Backend
      axios.post('https://decluttakingsever.onrender.com/api/v1/auth/google-register', { token: access_token })
        .then((res) => {
          console.log('User Registered:', res.data);
        })
        .catch((error) => {
          console.error('Signup Error:', error);
        });
    }
  }, [response]);

    return(
        <TouchableOpacity 
            style={SignUpStyles.socialButton}
            disabled={!request}    
            onPress={() => {
            promptAsync();
            }}
        >
            <Image style={{ height: 22, width: 22 }} source={require("../../../../assets/images/googleIcon.png")} />
            <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 16, fontWeight: '400', fontFamily: "Proxima Nova" }}>Continue with Google</Text>
        </TouchableOpacity>
    )
}

export default GoolgSignUp;  // Change this to GoogleSignUp
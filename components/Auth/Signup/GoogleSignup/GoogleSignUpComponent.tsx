import { SignUpStyles } from "@/styles/Signup/signup.style"
import { Image, Text, TouchableOpacity } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from "react";
import { googleLoginUser } from "@/redux/Redux/slice/authSlice";

const GoolgSignUp:React.FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '932086312968-4cb0v5bafo147hf741r8a3f0rh7oq6r5.apps.googleusercontent.com',
    androidClientId: '932086312968-4cb0v5bafo147hf741r8a3f0rh7oq6r5.apps.googleusercontent.com',
    iosClientId: '932086312968-4cb0v5bafo147hf741r8a3f0rh7oq6r5.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@dev.david/decluttaking-mobileapp',
    scopes: ['profile', 'email'],
  });

  // Handle Response
  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      if (access_token) {
        console.log('Access Token Received:', access_token);
        googleLoginUser(access_token);
      } else {
        console.log('Success response but no access_token', response);
      }
    } else {
      console.log('Google Auth not successful or pending', response);
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

// androidClientId: '932086312968-2u5fgjefbecf5g0ho9b7u36t4p0ii79j.apps.googleusercontent.com',
// iosClientId: '932086312968-to8cq3rqnuf6pscpkp52g06ojpcnijeo.apps.googleusercontent.com'
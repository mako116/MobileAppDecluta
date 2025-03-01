declare module 'react-native-identity-kyc' {
    import { ViewStyle } from 'react-native';
  
    interface IdentityKycProps {
      uri: string;
      containerStyle?: ViewStyle;
      loaderColor?: string;
      buttonText?: string;
      showDefaultButton?: boolean;
      merchant_key: string;
      first_name: string;
      last_name: string;
      email: string;
      config_id: string;
      is_test?: boolean;
      user_ref: string;
      onCancel?: (data: any) => void;
      onVerified?: (data: any) => void;
      onError?: (data: any) => void;
      customButton?: (onPress: () => void) => JSX.Element;
    }
  
    const IdentityKyc: React.FC<IdentityKycProps>;
  
    export default IdentityKyc;
  }
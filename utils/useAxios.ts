import axios, { AxiosInstance } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { persistor } from "../store";
import { RootState } from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.EXPO_PUBLIC_API_KEY;

const useAxios = (
  use_auth = false,
  use_multipart_header = false,
  use_form_encoded = false
) => {
  const userToken = useSelector((state: RootState) => state.auth.token);
  // const dispatch = useDispatch();

  const headers = {
    'Content-Type': 'application/json',
  } as Record<string, string>;

  if (use_auth) {
    headers['Authorization'] = `Bearer ${userToken}`;
  }
  if (use_multipart_header) {
    headers['Content-Type'] = 'multipart/form-data';
  }
  if (use_form_encoded) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers,
  });

//   const navigate = useNavigate()
//   const dispatch = useDispatch();
  // const clearPersistedData = async () => {
  //   await persistor.purge();
  // };

  // Add interceptor for 401 status code
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
          
        // dispatch(clearSelectedSuppliers());
        // navigate("/login")
        AsyncStorage.clear();
        sessionStorage.clear();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;

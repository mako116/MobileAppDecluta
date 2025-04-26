import React, { createContext, useContext, ReactNode } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define the form data interface based on your API requirements
export interface ProductFormData {
  // Images and media
  selectedImages: string[];
  selectedVideo: string | null;
  
  // Item details
  title: string;
  description: string;
  quantity: number;
  availability: string;
  
  // Condition
  condition: string;
  
  // Category and location
  category: string;
  subcategory: string;
  state: string;
  city: string;
  lga: string;
  
  // Pricing
  price: number;
  discountPrice: number;
}

// Initial form state
const initialFormData: ProductFormData = {
  selectedImages: [],
  selectedVideo: null,
  title: '',
  description: '',
  quantity: 1,
  availability: '',
  condition: '',
  category: '',
  subcategory: '',
  state: '',
  city: '',
  lga: '',
  price: 0,
  discountPrice: 0,
};

// Map form data to API request format
export const mapFormToApiRequest = (formData: ProductFormData, userId: string) => {
  return {
    createdBy: userId,
    productImages: formData.selectedImages,
    video: formData.selectedVideo,
    availability: formData.availability,
    price: formData.price,
    productTitle: formData.title,
    productDescription: formData.description,
    productQuantity: formData.quantity,
    productCondition: formData.condition,
    productCategory: formData.category,
    productSubCategory: formData.subcategory,
    location: `${formData.lga}, ${formData.city}, ${formData.state}`,
    sellerName: '', // You'll need to get this from user profile
    sellerPhoneNumber: '', // You'll need to get this from user profile
    sellerAddress: '', // You'll need to get this from user profile
  };
};

// Define validation schemas for each step
export const validationSchemas = {
  step1: Yup.object().shape({
    selectedImages: Yup.array().min(1, 'At least one image is required'),
  }),
  
  step2: Yup.object().shape({
    title: Yup.string().required('Title is required').max(100, 'Title cannot exceed 100 characters'),
    description: Yup.string().required('Description is required'),
    quantity: Yup.number().min(1, 'Quantity must be at least 1'),
    availability: Yup.string().required('Availability is required'),
  }),
  
  step3: Yup.object().shape({
    condition: Yup.string().required('Condition is required'),
  }),
  
  step4: Yup.object().shape({
    category: Yup.string().required('Category is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    lga: Yup.string().required('LGA is required'),
  }),
  
  step5: Yup.object().shape({
    price: Yup.number().required('Price is required').min(1, 'Price must be greater than 0'),
  })
};

// Complete validation schema (for final validation)
export const ProductFormValidationSchema = Yup.object().shape({
  selectedImages: Yup.array().min(1, 'At least one image is required'),
  title: Yup.string().required('Title is required').max(100, 'Title cannot exceed 100 characters'),
  description: Yup.string().required('Description is required'),
  quantity: Yup.number().min(1, 'Quantity must be at least 1'),
  availability: Yup.string().required('Availability is required'),
  condition: Yup.string().required('Condition is required'),
  category: Yup.string().required('Category is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  lga: Yup.string().required('LGA is required'),
  price: Yup.number().required('Price is required').min(1, 'Price must be greater than 0'),
});

// Create the context
interface ProductFormContextType {
  formik: ReturnType<typeof useFormik<ProductFormData>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isStepValid: (step: number) => boolean;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  resetForm: () => void;
  // Added compatibility methods to match old context API
  formData: ProductFormData;
  updateFormData: (field: keyof ProductFormData, value: any) => void;
  validateStep: (step: number) => boolean;
  errors: Record<keyof ProductFormData, string | undefined>;
}

const ProductFormContext = createContext<ProductFormContextType | undefined>(undefined);

// Context provider component
export const ProductFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  
  const formik = useFormik<ProductFormData>({
    initialValues: initialFormData,
    validationSchema: ProductFormValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // You can handle the final submission here
    },
  });

  // Validate a specific step
  const isStepValid = (step: number): boolean => {
    let schemaKey: keyof typeof validationSchemas;
    
    switch (step) {
      case 1:
        schemaKey = 'step1';
        break;
      case 2:
        schemaKey = 'step2';
        break;
      case 3:
        schemaKey = 'step3';
        break;
      case 4:
        schemaKey = 'step4';
        break;
      case 5:
        schemaKey = 'step5';
        break;
      default:
        return false;
    }
    
    try {
      validationSchemas[schemaKey].validateSync(formik.values);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Handle next step
  const handleNextStep = () => {
    if (isStepValid(currentStep)) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Trigger validation for fields in the current step
      const fieldsToValidate: (keyof ProductFormData)[] = [];
      
      switch (currentStep) {
        case 1:
          fieldsToValidate.push('selectedImages');
          break;
        case 2:
          fieldsToValidate.push('title', 'description', 'quantity', 'availability');
          break;
        case 3:
          fieldsToValidate.push('condition');
          break;
        case 4:
          fieldsToValidate.push('category', 'state', 'city', 'lga');
          break;
        case 5:
          fieldsToValidate.push('price');
          break;
      }
      
      fieldsToValidate.forEach(field => {
        formik.setFieldTouched(field, true);
      });
    }
  };

  // Handle previous step
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Reset the form
  const resetForm = () => {
    formik.resetForm();
    setCurrentStep(1);
  };

  // Add compatibility layer for old context API
  const updateFormData = (field: keyof ProductFormData, value: any) => {
    formik.setFieldValue(field, value);
  };

  const validateStep = (step: number): boolean => {
    return isStepValid(step);
  };

  // Extract form data and errors from formik for compatibility
  const formData = formik.values;
  const errors: Record<keyof ProductFormData, string | undefined> = formik.errors as any;

  return (
    <ProductFormContext.Provider
      value={{
        formik,
        currentStep,
        setCurrentStep,
        isStepValid,
        handleNextStep,
        handlePreviousStep,
        resetForm,
        // Compatibility API
        formData,
        updateFormData,
        validateStep,
        errors
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};

// Custom hook to use the context
export const useProductForm = () => {
  const context = useContext(ProductFormContext);
  if (context === undefined) {
    throw new Error('useProductForm must be used within a ProductFormProvider');
  }
  return context;
};
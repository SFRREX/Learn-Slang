import { useFonts } from 'expo-font';

export const fontAssets = {
  'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
};

/**
 * Custom hook to load application Poppins font family
 * Returns [loaded, error] tuple from expo-font
 */
export function useAppFonts() {
  const [loaded, error] = useFonts(fontAssets);
  return { loaded, error };
}

export default useAppFonts;

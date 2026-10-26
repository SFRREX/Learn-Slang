import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { images } from '@/constants/images';
import { VerificationModal } from '@/components/verification-modal';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('alex@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleSignUp = () => {
    setShowVerifyModal(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Top Back Navigation Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center -ml-2 mb-4"
        >
          <Image
            source={images.chevronLeft}
            style={styles.backChevron}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Header Title & Subtitle */}
        <View className="mb-4">
          <Text className="font-poppins-bold text-[32px] leading-[40px] text-[#0D132B]">
            Create your account
          </Text>
          <Text className="font-poppins-regular text-[16px] text-[#6B7380] mt-2">
            Start your language journey today ✨
          </Text>
        </View>

        {/* Mascot Peeking over the Card */}
        <View className="items-center -mb-2 z-10">
          <Image
            source={images.mascotPeeking}
            style={styles.mascotPeeking}
            resizeMode="contain"
          />
        </View>

        {/* Form Inputs */}
        <View className="w-full">
          {/* Email Input Field */}
          <View className="w-full h-[68px] rounded-2xl border border-[#E5E7EB] bg-white px-4 py-2.5 mb-3 justify-center">
            <Text className="font-poppins-regular text-[12px] text-[#6B7380]">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="alex@gmail.com"
              placeholderTextColor="#9CA3AF"
              className="font-poppins-medium text-[16px] text-[#0D132B] p-0"
            />
          </View>

          {/* Password Input Field with Eye Icon Toggle */}
          <View className="w-full h-[68px] rounded-2xl border border-[#E5E7EB] bg-white px-4 py-2.5 mb-5 flex-row items-center justify-between">
            <View className="flex-1 justify-center">
              <Text className="font-poppins-regular text-[12px] text-[#6B7380]">
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="Enter password"
                placeholderTextColor="#9CA3AF"
                className="font-poppins-medium text-[16px] text-[#0D132B] p-0"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowPassword(!showPassword)}
              className="w-10 h-10 items-center justify-center -mr-1"
            >
              <Image
                source={images.eyeIcon}
                style={[styles.eyeIcon, !showPassword && styles.eyeIconFaded]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* Primary Sign Up Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleSignUp}
            className="w-full h-[58px] rounded-2xl bg-[#5F41EF] items-center justify-center mb-6"
            style={styles.primaryButtonShadow}
          >
            <Text className="font-poppins-bold text-[17px] text-white">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Divider: "or continue with" */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-[1px] bg-[#E5E7EB]" />
          <Text className="px-3 font-poppins-regular text-[14px] text-[#6B7380]">
            or continue with
          </Text>
          <View className="flex-1 h-[1px] bg-[#E5E7EB]" />
        </View>

        {/* Social Authentication Buttons */}
        <View className="w-full mb-8">
          {/* Google */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowVerifyModal(true)}
            className="w-full h-[56px] rounded-2xl border border-[#E5E7EB] bg-white flex-row items-center justify-center px-4 mb-3 relative"
          >
            <Image
              source={images.googleIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text className="font-poppins-medium text-[15px] text-[#0D132B]">
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowVerifyModal(true)}
            className="w-full h-[56px] rounded-2xl border border-[#E5E7EB] bg-white flex-row items-center justify-center px-4 mb-3 relative"
          >
            <Image
              source={images.facebookIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text className="font-poppins-medium text-[15px] text-[#0D132B]">
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          {/* Apple */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowVerifyModal(true)}
            className="w-full h-[56px] rounded-2xl border border-[#E5E7EB] bg-white flex-row items-center justify-center px-4 relative"
          >
            <Image
              source={images.appleIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text className="font-poppins-medium text-[15px] text-[#0D132B]">
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Switch to Sign In */}
        <View className="flex-row items-center justify-center pb-4">
          <Text className="font-poppins-regular text-[14px] text-[#6B7380]">
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/(auth)/signin')}
          >
            <Text className="font-poppins-bold text-[14px] text-[#5F41EF]">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Verification Code Modal */}
      <VerificationModal
        visible={showVerifyModal}
        email={email}
        onClose={() => setShowVerifyModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 36,
  },
  backChevron: {
    width: 13,
    height: 22,
  },
  mascotPeeking: {
    width: 220,
    height: 140,
  },
  eyeIcon: {
    width: 22,
    height: 16,
  },
  eyeIconFaded: {
    opacity: 0.55,
  },
  socialIcon: {
    position: 'absolute',
    left: 20,
    width: 22,
    height: 22,
  },
  primaryButtonShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#5F41EF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 14,
      },
      android: {
        elevation: 8,
      },
      default: {
        shadowColor: '#5F41EF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 14,
      },
    }),
  },
});

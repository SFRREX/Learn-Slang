import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { images } from '@/constants/images';

export default function OnboardingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/(auth)/signup');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      {/* Top Header Logo: mascot parrot + "lingo" */}
      <View className="flex-row items-center justify-center pt-3 pb-1">
        <Image
          source={images.mascotLogo}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text className="font-poppins-bold text-[30px] text-[#0D132B] tracking-tight ml-2.5">
          lingo
        </Text>
      </View>

      {/* Headline & Subtitle */}
      <View className="px-7 mt-6">
        <Text className="font-poppins-bold text-[34px] leading-[42px] text-[#0D132B]">
          {'Your AI language\nteacher.'}
        </Text>
        <Text className="font-poppins-regular text-[16px] leading-[25px] text-[#4B5563] mt-3">
          {'Real conversations, personalized\nlessons, anytime, anywhere.'}
        </Text>
      </View>

      {/* Mascot Illustration with Speech Bubbles */}
      <View className="flex-1 items-center justify-center px-6 my-2">
        <Image
          source={images.onboardingIllustration}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Action: Get Started Button (Pagination dots omitted per requirements) */}
      <View className="px-7 pb-8 pt-2">
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleGetStarted}
          className="w-full bg-[#5F41EF] h-[60px] rounded-[24px] flex-row items-center justify-center px-6 relative"
          style={styles.actionButtonShadow}
        >
          <Text className="font-poppins-bold text-[18px] text-white">
            Get Started
          </Text>
          <View className="absolute right-6">
            <Image
              source={images.chevronRight}
              style={styles.chevronIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoImage: {
    width: 36,
    height: 38,
  },
  illustration: {
    width: '100%',
    height: '100%',
    maxWidth: 360,
    maxHeight: 380,
  },
  chevronIcon: {
    width: 12,
    height: 20,
  },
  actionButtonShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#5F41EF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.28,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
      default: {
        shadowColor: '#5F41EF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.28,
        shadowRadius: 16,
      },
    }),
  },
});

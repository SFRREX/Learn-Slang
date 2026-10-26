import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email?: string;
  onSuccess?: () => void;
}

export function VerificationModal({
  visible,
  onClose,
  email = 'alex@gmail.com',
  onSuccess,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState('');
  const inputRef = useRef<React.ComponentRef<typeof TextInput>>(null);

  // Focus input automatically when modal opens
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setCode('');
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Handle digit entry and auto-navigate on 6th digit
  const handleCodeChange = (text: string) => {
    // Only accept numeric digits up to 6 characters
    const cleaned = text.replace(/[^0-9]/g, '').slice(0, 6);
    setCode(cleaned);

    if (cleaned.length === 6) {
      setTimeout(() => {
        onClose();
        if (onSuccess) {
          onSuccess();
        } else {
          router.push('/');
        }
      }, 250);
    }
  };

  const handleCellPress = () => {
    inputRef.current?.focus();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoidingContainer}
      >
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View className="bg-white rounded-3xl p-6 mx-5 max-w-[400px] w-full border border-[#E5E7EB]" style={styles.modalCardShadow}>
          {/* Header */}
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-poppins-bold text-[22px] text-[#0D132B]">
              Verify your email
            </Text>
            <TouchableOpacity
              onPress={onClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              className="w-8 h-8 rounded-full bg-[#F3F4F6] items-center justify-center"
            >
              <Text className="text-[#6B7380] text-[16px] font-bold">✕</Text>
            </TouchableOpacity>
          </View>

          {/* Subtitle */}
          <Text className="font-poppins-regular text-[14px] leading-5 text-[#6B7380] mb-6">
            {"We've sent a 6-digit verification code to "}
            <Text className="font-poppins-semibold text-[#0D132B]">
              {email || 'your email'}
            </Text>
            {'. Enter it below to continue.'}
          </Text>

          {/* Hidden TextInput capturing numeric input */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            autoFocus={visible}
            caretHidden
          />

          {/* 6 Digit Display Boxes */}
          <Pressable onPress={handleCellPress} className="flex-row justify-between mb-6">
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const digit = code[index] || '';
              const isFocused = code.length === index;

              return (
                <View
                  key={index}
                  className={`w-[48px] h-[58px] rounded-2xl items-center justify-center border ${
                    isFocused
                      ? 'border-[#5F41EF] bg-[#5F41EF]/5'
                      : digit
                      ? 'border-[#0D132B] bg-white'
                      : 'border-[#E5E7EB] bg-[#F9FAFB]'
                  }`}
                >
                  <Text className="font-poppins-bold text-[22px] text-[#0D132B]">
                    {digit}
                  </Text>
                </View>
              );
            })}
          </Pressable>

          {/* Resend code footer */}
          <View className="items-center">
            <Text className="font-poppins-regular text-[13px] text-[#6B7380]">
              {"Didn't receive the code? "}
              <Text
                className="font-poppins-semibold text-[#5F41EF]"
                onPress={() => {
                  setCode('');
                  inputRef.current?.focus();
                }}
              >
                Resend
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  modalCardShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
      },
      android: {
        elevation: 12,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
      },
    }),
  },
});

export default VerificationModal;

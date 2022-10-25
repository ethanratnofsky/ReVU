import { StyleSheet } from 'react-native';

// Colors
export const VU_BLACK = '#1C1C1C';
export const VU_GOLD = '#CFAE70';
export const VU_WHITE = '#FFFFFF';
export const VU_METALLIC_GOLD_START = '#FEEEB6';
export const VU_METALLIC_GOLD_END = '#B49248';

// Styles
export const THEME_STYLES = StyleSheet.create({
    // Background Colors
    blackBackground: {
        backgroundColor: VU_BLACK,
    },
    goldBackground: {
        backgroundColor: VU_GOLD,
    },
    whiteBackground: {
        backgroundColor: VU_WHITE,
    },
    // Text Colors
    blackText: {
        color: VU_BLACK,
    },
    goldText: {
        color: VU_GOLD,
    },
    whiteText: {
        color: VU_WHITE,
    },
    // Font
    libreCaslonFont: {
        fontFamily: 'LibreCaslonText_400Regular',
    }
});

export const SPLASH_SCREEN_TIME = 2000; // milliseconds
export const TERMS_AND_CONDITIONS = "By using this application, you agree to posting appropriate content with proper language or risk having your comments/complaints removed."


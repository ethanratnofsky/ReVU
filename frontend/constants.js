import { StyleSheet } from 'react-native';

// TODO: Replace with dynamic values from backend
export const DINING_HALLS = [
    {
        id: 0,
        name: 'Rand Dining Hall',
        overallRating: 5.0,
    },
    {
        id: 1,
        name: 'Kissam Dining Hall',
        overallRating: 4.3,
    },
    {
        id: 2,
        name: 'Rothschild Dining Hall',
        overallRating: 3.0,
    },
    {
        id: 3,
        name: 'E. B. I. Dining Hall',
        overallRating: 4.2,
    },
    {
        id: 4,
        name: 'Zeppos Dining Hall',
        overallRating: 2.5,
    },
    {
        id: 5,
        name: 'Commons Dining Hall',
        overallRating: null,
    }
]

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
    },
    libreCaslonBoldFont: {
        fontFamily: 'LibreCaslonText_700Bold',
    },
});

export const SPLASH_SCREEN_TIME = 1000; // milliseconds
export const TERMS_AND_CONDITIONS = "By using this application, you agree to posting appropriate content with proper language or risk having your comments/complaints removed."

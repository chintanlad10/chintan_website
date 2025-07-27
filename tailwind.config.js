/*
=============================================================================
TAILWIND CSS CONFIGURATION
=============================================================================
Custom color palette and configuration for Chintan Lad's portfolio website
Professional color scheme with comprehensive shade variations
=============================================================================
*/

// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Rich Black - Deep, professional dark tones
                'rich-black': {
                    DEFAULT: '#0d1b2a',
                    100: '#030609',
                    200: '#050b11',
                    300: '#08111a',
                    400: '#0b1622',
                    500: '#0d1b2a',
                    600: '#234870',
                    700: '#3875b6',
                    800: '#74a3d4',
                    900: '#bad1ea'
                },
                
                // Oxford Blue - Primary brand color
                'oxford-blue': {
                    DEFAULT: '#1b263b',
                    100: '#05080c',
                    200: '#0b0f18',
                    300: '#101724',
                    400: '#161f30',
                    500: '#1b263b',
                    600: '#364c75',
                    700: '#5172af',
                    800: '#8ba1ca',
                    900: '#c5d0e4'
                },
                
                // Yinmn Blue - Secondary brand color
                'yinmn-blue': {
                    DEFAULT: '#415a77',
                    100: '#0d1218',
                    200: '#1a242f',
                    300: '#273647',
                    400: '#34485f',
                    500: '#415a77',
                    600: '#587aa1',
                    700: '#819bb9',
                    800: '#abbcd1',
                    900: '#d5dee8'
                },
                
                // Silver Lake Blue - Accent color
                'silver-lake-blue': {
                    DEFAULT: '#778da9',
                    100: '#161c23',
                    200: '#2c3746',
                    300: '#425369',
                    400: '#586f8d',
                    500: '#778da9',
                    600: '#91a2ba',
                    700: '#acbacb',
                    800: '#c8d1dc',
                    900: '#e3e8ee'
                },
                
                // Platinum - Light neutral tones
                'platinum': {
                    DEFAULT: '#e0e1dd',
                    100: '#2e2f2a',
                    200: '#5b5e53',
                    300: '#898c7e',
                    400: '#b4b6ad',
                    500: '#e0e1dd',
                    600: '#e5e6e3',
                    700: '#ececea',
                    800: '#f2f3f1',
                    900: '#f9f9f8'
                },
                
                // Midnight Green - Professional accent
                'midnight-green': {
                    DEFAULT: '#124559',
                    100: '#040e12',
                    200: '#071c24',
                    300: '#0b2935',
                    400: '#0f3747',
                    500: '#124559',
                    600: '#20799c',
                    700: '#36a9d6',
                    800: '#79c5e4',
                    900: '#bce2f1'
                },
                
                // Air Force Blue - Supporting color
                'air-force-blue': {
                    DEFAULT: '#598392',
                    100: '#121a1d',
                    200: '#24343a',
                    300: '#354e57',
                    400: '#476874',
                    500: '#598392',
                    600: '#769dab',
                    700: '#99b6c0',
                    800: '#bbced5',
                    900: '#dde7ea'
                },
                
                // Ash Gray - Natural accent
                'ash-gray': {
                    DEFAULT: '#aec3b0',
                    100: '#1f2a20',
                    200: '#3e5441',
                    300: '#5e7f61',
                    400: '#83a386',
                    500: '#aec3b0',
                    600: '#bdcebf',
                    700: '#cedbcf',
                    800: '#dee7df',
                    900: '#eff3ef'
                },
                
                // Beige - Warm highlight color
                'beige': {
                    DEFAULT: '#eff6e0',
                    100: '#384915',
                    200: '#71912a',
                    300: '#a4cc4e',
                    400: '#c9e197',
                    500: '#eff6e0',
                    600: '#f2f8e6',
                    700: '#f5f9ec',
                    800: '#f8fbf2',
                    900: '#fcfdf9'
                }
            },
            
            // Typography Configuration
            fontFamily: {
                'inter': ['Inter', 'system-ui', 'sans-serif'],
                'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif']
            }
        }
    }
}

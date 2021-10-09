import { defaultTheme } from 'spectacle';

let themeOptions: typeof defaultTheme = {
    colors: {
        primary: '#fff',
        secondary: '#fff',
        tertiary: "#001155"
    },
    fonts: {
        header: '"Noto Sans", Helvetica, Arial',
        text: '"Noto Sans", Helvetica, Arial',
        monospace: '"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace'
    },
    size: {
        
    },
    space: [16, 24, 32],
    fontSizes: {
        h1: '72px',
        h2: '64px',
        h3: '48px',
        text: '44px',
        monospace: '20px',
    }
};

export default themeOptions;
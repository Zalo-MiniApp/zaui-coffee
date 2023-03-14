module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#0250B6",
        gray: "#767A7F",
        green: '#288F4E',
        background: '#ffffff',
        skeleton: 'rgba(0, 0, 0, 0.1)'
      }
    },
  },
};

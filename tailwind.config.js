export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pomodoro-bg": "url('/pomodoroBG.webp')",
        "pomodoro-back": "url('/pomodoroBack.webp')",
      },
    },
  },
  plugins: [],
};

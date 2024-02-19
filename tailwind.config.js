/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        160: "640px",
        180: "720px",
        200: "800px",
      },
      height: {
        page: "800px",
        85: "340px",
        135: "540px",
        160: "640px",
      },
      fontSize: {
        bg: "200px",
        title: "120px",
        subtitle: "32px",
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};

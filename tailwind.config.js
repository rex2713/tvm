/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        160: "640px",
        180: "720px",
        200: "800px",
        page: "1760px",
      },
      height: {
        page: "800px",
        85: "340px",
        135: "540px",
        160: "640px",
      },
      fontSize: {
        bacc: "200px",
        title: "120px",
        subtitle: "32px",
      },
      color: {
        linear1_1: "#143666",
      },
    },
  },
  plugins: [
    
  ],
};

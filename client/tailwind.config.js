/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
// import flowbite from 'flowbite-react/tailwind' //try this if require is fail.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...

//   ],
//   plugins: [
//     // ...
//     ,
//   ],
// };

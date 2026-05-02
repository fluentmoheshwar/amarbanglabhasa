// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Sans Bengali",
      cssVariable: "--font-noto-sans-bengali",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});

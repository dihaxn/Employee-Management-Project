import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
<<<<<<< HEAD

 /* theme:{
    extend:{
      fontSize:  {
        'course-details-heading-small' : ['26px','36px'],
        'course-details-heading-large' : ['36px','44px'],
        'home-heading-small' : ['28px','34px'],
        'home-heading-large' : ['48px','56px'],
        'default' : ['15px','21px'],
      }

    },*/

  },
=======
  // The theme configuration should be inside the 'tailwind' option
  /* theme: {
        extend: {
          fontSize: {
            'course-details-heading-small': ['26px', '36px'],
            'course-details-heading-large': ['36px', '44px'],
            'home-heading-small': ['28px', '34px'],
            'home-heading-large': ['48px', '56px'],
            'default': ['15px', '21px'],
          },
        },
      },*/
})
>>>>>>> dd6d3145fb306b62c7cf04a3afd89c4a1ab5e66d

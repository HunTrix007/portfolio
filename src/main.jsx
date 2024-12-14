import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "/src/assets/js/jquery.min.js";
import "/src/assets/js/jquery.validate.js";
import "/src/assets/js/jquery.magnific-popup.js";
import "/src/assets/js/imagesloaded.pkgd.js";
import "/src/assets/js/isotope.pkgd.js";
import "/src/assets/js/jquery.slimscroll.js";
import "/src/assets/js/owl.carousel.js";

import "/src/assets/js/scripts.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

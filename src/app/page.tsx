// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import VideoSection from "@/components/videoSection";

// const HeroSection = dynamic(() => import("@/components/heroSection"), {
//   ssr: false,
//   loading: () => <div></div>,
// });
// const Services = dynamic(() => import("@/components/services"), {
//   ssr: false,
//   loading: () => <div></div>,
// });
// const Contact = dynamic(() => import("@/components/contact"), {
//   ssr: false,
//   loading: () => <div></div>,
// });

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const App: React.FC = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true); // Prevent hydration mismatch
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <Suspense fallback={<div>Loading...</div>}>
//         {mounted && (
//           <>
//             <motion.div
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               <HeroSection />
//             </motion.div>

//             <motion.div
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               <Services />
//               <VideoSection />
//             </motion.div>

//             <motion.div
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               <Contact />
//             </motion.div>
//           </>
//         )}
//       </Suspense>

//       <Footer />
//     </div>
//   );
// };

// export default App;


"use client";

import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoSection from "@/components/videoSection";

const HeroSection = dynamic(() => import("@/components/heroSection"), {
  ssr: false,
  loading: () => <div></div>,
});
const Services = dynamic(() => import("@/components/services"), {
  ssr: false,
  loading: () => <div></div>,
});
const Contact = dynamic(() => import("@/components/contact"), {
  ssr: false,
  loading: () => <div></div>,
});

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Prevent hydration mismatch
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        {mounted && (
          <>
            <div>
              <HeroSection />
            </div>

            <div>
              <Services />
              <VideoSection />
            </div>

            <div>
              <Contact />
            </div>
          </>
        )}
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;

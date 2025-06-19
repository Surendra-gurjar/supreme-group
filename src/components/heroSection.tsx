// const HeroSection = () => {
//   return (
//     <div className="automotive">
//       <section className="relative lg:h-screen min-h-[450px] overflow-hidden bg-blueDark">
//         <div className="absolute inset-0">
//           <video
//             autoPlay
//             muted
//             // poster="/assets/automotive.a1a1a562cc7e39699232.webp"
//             playsInline
//             loop
//             className="h-full w-full object-cover object-center"
//           >
//             <source
//               src="/assets/automotive.224e7418884105595114.mp4"
//               type="video/mp4"
//             />
//           </video>
//         </div>
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
//           <span className="sg-translate text-sm font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">
//             Driven by performance
//           </span>
//           <h2 className="sg-translate text-white font-light leading-tight pb-2">
//             <span className="font-semibold">
//               Soft trims and <span className="text-blue">NVH solutions</span>
//             </span>
//             <br className="hidden md:block" /> for seamless rides
//           </h2>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;



const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '450px',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0B1C2C', // or your tailwind 'bg-blueDark' equivalent
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/automotive.a1a1a562cc7e39699232.webp"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source
          src="/assets/automotive.224e7418884105595114.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Text Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          display: 'grid',
          placeContent: 'center',
          textAlign: 'center',
          width: '91.666667%', // equivalent to w-11/12
          margin: '0 auto',
          paddingTop: '2.5rem', // adjust as needed
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontWeight: 300,
            fontSize: '1.500rem', // ~text-lg
            color: '#ffffff',
            lineHeight: '1.375rem',
            display: 'block',
            marginBottom: '0.75rem',
          }}
        >
          Driven by performance
        </span>

        <h2
          style={{
            fontWeight: 300,
            color: '#ffffff',
            lineHeight: '1.5',
            paddingBottom: '0.5rem',
            fontSize: '2rem', // or more if needed
          }}
        >
          <span style={{ fontWeight: 600 }}>
            Soft trims and <span style={{ color: '#007BFF' }}>NVH solutions</span>
          </span>
          <br />
          for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;

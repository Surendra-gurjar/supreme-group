const HeroSection = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "450px",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0B1C2C", 
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/automotive.a1a1a562cc7e39699232.webp"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="/assets/automotive.224e7418884105595114.mp4"
          type="video/mp4"
        />
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          display: "grid",
          placeContent: "center",
          textAlign: "center",
          width: "91.666667%", 
          margin: "0 auto",
          paddingTop: "2.5rem", 
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontWeight: 300,
            fontSize: "1.500rem", 
            color: "#ffffff",
            lineHeight: "1.375rem",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          Driven by performance
        </span>

        <h2
          style={{
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: "1.5",
            paddingBottom: "0.5rem",
            fontSize: "2rem", 
          }}
        >
          <span style={{ fontWeight: 600 }}>
            Soft trims and{" "}
            <span style={{ color: "#007BFF" }}>NVH solutions</span>
          </span>
          <br />
          for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;

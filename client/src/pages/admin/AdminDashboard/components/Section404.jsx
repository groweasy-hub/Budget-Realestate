function Section404({ title }) {
  return (
    <div style={{ minHeight: "calc(100vh - 120px)", display: "grid", placeItems: "center" }}>
      <div
        style={{
          width: "min(100%, 760px)",
          padding: "56px 32px",
          borderRadius: "20px",
          textAlign: "center",
          background: "#ffffff",
          boxShadow: "0 10px 32px rgba(18, 31, 53, 0.07), 0 0 0 1px rgba(20, 31, 47, 0.05)",
        }}
      >
        <div
          style={{
            width: "78px",
            height: "78px",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 22px",
            borderRadius: "50%",
            background: "#eef7f0",
            color: "#159447",
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          404
        </div>
        <h2 style={{ margin: "0 0 10px", color: "#15203a", fontSize: "30px", fontWeight: 800, letterSpacing: "-0.03em" }}>
          {title}
        </h2>
        <p style={{ margin: 0, color: "#576177", fontSize: "16px", lineHeight: 1.6 }}>
          This section is not available yet.
        </p>
      </div>
    </div>
  );
}

export default Section404;

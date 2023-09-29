import * as React from "react";

export const EmailTemplate = ({ fullName, email, phone, timeline, budget, description }) => (
  <body style={{ maxWidth: "100vw", minHeight: "100vh", backgroundColor: "rgb(212 212 212)" }}>
    <section
      style={{
        maxWidth: "60rem",
        marginInline: "auto",
        marginBlock: "2rem",
        backgroundColor: "white",
        padding: "1rem 2rem",
      }}
    >
      <header>
        <h1>New Form Submission</h1>
        <hr />
      </header>

      <main>
        <p style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Name</p>
        <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>{fullName}</p>

        <p style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Email</p>
        <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>{email}</p>

        <p style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Phone</p>
        <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>{phone}</p>

        <p style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Timeline</p>
        <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>{timeline}</p>

        <p style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Budget</p>
        <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>{budget}</p>

        <p style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Description</p>
        <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>{description}</p>
      </main>
    </section>
  </body>
);

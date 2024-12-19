import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px 20px",
        minHeight: "100vh",
        overflow: "auto",
        backgroundColor: "#fff",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "40px" }}>
        <img
          src="/logo2.jpg" // logo2 kullanılacak
          alt="Restoran Logo"
          style={{
            maxWidth: "250px",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Başlık */}
      <h1
        style={{
          fontSize: "2rem",
          color: "#333",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Hoşgeldiniz! Menümüzü keşfedin.
      </h1>

      {/* Kategori Kartları */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Burger Kategorisi */}
        <Link
          to="/menu?category=Burger"
          style={{ textDecoration: "none", color: "#000", width: "250px" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "250px",
              backgroundImage: "url('images/relish.jpg')", // Burger görseli
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.4)",
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                borderRadius: "10px",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#d1d1d1", // Hafif gri renk
                padding: "10px 20px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                borderRadius: "5px",
                zIndex: "2",
                transition: "color 0.3s ease, transform 0.3s ease", // Geçiş efekti
              }}
              className="category-name"
            >
              Burger
            </div>
          </div>
        </Link>

        {/* Patates Kategorisi */}
        <Link
          to="/menu?category=Patates Kızartması"
          style={{ textDecoration: "none", color: "#000", width: "250px" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "250px",
              backgroundImage: "url('images/sade.jpg')", // Patates görseli
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.4)",
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                borderRadius: "10px",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#d1d1d1", // Hafif gri renk
                padding: "10px 20px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                borderRadius: "5px",
                zIndex: "2",
                transition: "color 0.3s ease, transform 0.3s ease", // Geçiş efekti
              }}
              className="category-name"
            >
              Patates
            </div>
          </div>
        </Link>

        {/* Tavuk Burger Kategorisi */}
        <Link
          to="/menu?category=Tavuk Burger"
          style={{ textDecoration: "none", color: "#000", width: "250px" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "250px",
              backgroundImage: "url('images/tokyo.jpg')", // Tavuk burger görseli
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.4)",
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                borderRadius: "10px",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#d1d1d1", // Hafif gri renk
                padding: "10px 20px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                borderRadius: "5px",
                zIndex: "2",
                transition: "color 0.3s ease, transform 0.3s ease", // Geçiş efekti
              }}
              className="category-name"
            >
              Tavuk Burger
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;

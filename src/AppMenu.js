import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Modal from "./Modal";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const location = useLocation();

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  useEffect(() => {
    // URL parametresinden kategori bilgisini alalım
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("Tümü"); // Eğer kategori boşsa "Tümü" seçilsin
    }
  }, [location]);

  const categories = [
    "Tümü",
    ...new Set(menuItems.map((item) => item.Kategori)),
  ];

  const filteredItems =
    selectedCategory === "Tümü"
      ? menuItems
      : menuItems.filter((item) => item.Kategori === selectedCategory);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {/* Logo Sol Üst */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">
          <img
            src="/logo.png"
            alt="E-Menü Logo"
            style={{ maxWidth: "600px", height: "auto" }}
          />
        </Link>
      </div>

      {/* Kategoriler */}
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              border: "none",
              backgroundColor:
                selectedCategory === category ? "#A8A8A8" : "#D1D1D1", // Gri tonları
              color: selectedCategory === category ? "#FFF" : "#000",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menü Öğeleri */}
      <div>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #E0E0E0",
              borderRadius: "8px",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <div style={{ flex: "1", textAlign: "center" }}>
              <img
                src={item.Görsel}
                alt={item.Ad}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => openModal(item.Görsel)}
              />
            </div>

            <div style={{ flex: "3", marginLeft: "10px" }}>
              <h2 style={{ margin: "0 0 10px 0" }}>{item.Ad}</h2>
              <p style={{ margin: "0 0 10px 0" }}>{item.Açıklama}</p>
              <strong style={{ color: "#A8A8A8" }}>{item.Fiyat}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} image={modalImage} />
    </div>
  );
}

export default Menu;

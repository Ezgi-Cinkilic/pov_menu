import React from "react";

function Modal({ isOpen, onClose, image }) {
  if (!isOpen) return null; // Modal kapalıysa hiçbir şey render edilmez

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
      }}
      onClick={onClose} // Modal dışında bir yere tıklanırsa kapat
    >
      <img
        src={image}
        alt="Büyütülmüş Görsel"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "10px",
        }}
        onClick={(e) => e.stopPropagation()} // Görsel tıklanırsa modal kapanmasın
      />
    </div>
  );
}

export default Modal;
2;

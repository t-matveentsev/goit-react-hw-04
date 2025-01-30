import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal opened"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" }, // Напівпрозорий фон
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          border: "none",
          background: "none",
        },
      }}
    >
      <div>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          X
        </button>
        <img src={image} style={{ maxWidth: "90vw", maxHeight: "90vh" }} />
      </div>
    </Modal>
  );
};

export default ImageModal;

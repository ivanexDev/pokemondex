import { useRef } from "react";

const PokemonModal = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  return (
    <dialog ref={modalRef}>
      <h1>Este es un modal</h1>
    </dialog>
  );
};

export default PokemonModal;

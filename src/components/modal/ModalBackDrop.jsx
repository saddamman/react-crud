export default function ModalBackDrop({ onClick }) {
  return (
    <div
      className="fixed w-full top-0 left-0 h-screen z-modalZIndex bg-black/35"
      onClick={onClick}
    ></div>
  );
}

import { useRef } from "react";

export default function UncontrolledInput() {
  const inputRef = useRef(null);

  const showValue = () => {
    alert(`Hai scritto: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef} 
        placeholder="write"
      />
      <button onClick={showValue}>Show value</button>
    </div>
  );
}

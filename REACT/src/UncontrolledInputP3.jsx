import { useRef } from "react";

export default function UncontrolledInputP3() {
  const inputRef = useRef(null);
  const handleShowValue = () => {
    alert(`value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Part 3: write"
      />
      <button onClick={handleShowValue}>Show value</button>
    </div>
  );
}

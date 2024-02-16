import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";

export default function Input({ command, onSubmit, disabled }) {
  const [_command, setCommand] = useState(command || "");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command.toLowerCase().trim());
  };

  const handleBlur = () => {
    if (!disabled && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, disabled]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="command">
        <span style={{ color: "#ff9e64" }}>~/root</span>{" "}
        <span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
      </label>

      <input
        type="text"
        className={styles.input}
        value={_command}
        onChange={(e) => setCommand(e.target.value)}
        disabled={disabled}
        ref={inputRef}
        onBlur={handleBlur}
        autoFocus
      />
    </form>
  );
}

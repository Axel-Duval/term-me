import { useRef, useState } from "react";
import { CONTENTS } from "../utils/commandHelper";
import { escapeHTML } from "../utils/escape";
import Command from "./Command";
import styles from "./Terminal.module.css";

export default function Terminal() {
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);
  const terminalRef = useRef(null);

  const addCommand = async (command) => {
    let output;
    setLoading(true);
    setCommands([...commands, { command, output: "Loading..." }]);
    if (`${command}` in CONTENTS) {
      output = await CONTENTS[`${command}`]();
    } else if (command === "clear") {
      setLoading(false);
      return setCommands([]);
    } else {
      output = CONTENTS.error(escapeHTML(command));
    }

    setLoading(false);
    setCommands([...commands.slice(0, commands.length), { command, output }]);
    if (terminalRef) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  return (
    <div className={styles.terminal} ref={terminalRef}>
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={addCommand} />}
    </div>
  );
}

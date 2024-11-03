import { forwardRef, useEffect, useState } from "react";
import { VALID_COMMANDS } from "../config/commands.output";

const TerminalInput = forwardRef(
  (
    {
      disabled = false,
      data,
      setData,
      history = [],
      setHistory,
      index = 0,
      commandHistory = [],
      setCommandHistory,
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(commandHistory.length);

    useEffect(() => {
      setCurrentIndex(commandHistory.length);
    }, [history]);

    const handleSubmit = (e) => {
      e.preventDefault();

      let value = data?.input_text.trim().toLowerCase() ?? "";

      if (value === "") {
        return;
      }

      let is_valid_command = false,
        output = "";

      VALID_COMMANDS.map((item) => {
        if (Object.keys(item)[0] === value) {
          is_valid_command = true;
          output = item[value];
        }
      });

      setCommandHistory((prev) => [...prev, value]);

      if (is_valid_command === false) {
        output = `<br />
        <p class="sm_txt">${value}: command not found. commands.</p>
        <br />
        <p class="sm_txt">
          Type <span class="sm_txt_bold">'help'</span> to see the available
        </p>
        <br />`;

        setData({ ...data, output, input_text: "" });

        setHistory((prev) => [...prev, { value: value, output }]);
        return;
      }

      if (value === "clear") {
        setHistory([]);
        setData({ ...data, input_text: "", used_clear: true });
        return;
      }

      setHistory((prev) => [...prev, { value: value, output }]);
      setData({ ...data, input_text: "" });
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        let index = Math.max(0, currentIndex - 1);

        setCurrentIndex(index);
        setData({ ...data, input_text: commandHistory[index] });
      } else if (e.key === "ArrowDown") {
        let index = Math.min(currentIndex + 1, commandHistory.length - 1);

        setCurrentIndex(index);
        setData({ ...data, input_text: commandHistory[index] });
      }
    };

    return (
      <div className="terminal_input_container">
        <p className="sm_txt">
          <span className="sm_txt_bold color_yellow">(</span>
          <span className="color_red">root👽hari</span>
          <span className="sm_txt_bold color_yellow">)-[</span>~
          <span className="sm_txt_bold color_yellow">]</span>
        </p>

        {disabled ? (
          <p className="sm_txt color_lg_yellow">{history[index]?.value}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              ref={ref}
              id=""
              className="terminal_input"
              autoFocus
              value={data?.input_text}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setData({ ...data, input_text: e.target.value.trim() });
              }}
            />
          </form>
        )}
      </div>
    );
  }
);

export default TerminalInput;

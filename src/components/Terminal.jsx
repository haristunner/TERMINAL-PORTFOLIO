import TerminalSvg from "../assets/terminal.svg";
import CloseIcon from "../assets/closeicon.svg";
import { useEffect, useRef, useState } from "react";
import TerminalInput from "./TerminalInput";
import { MOTD_OUTPUT } from "../config/commands.output";
import ReactHtmlParser from "react-html-parser";

const Terminal = () => {
  const [data, setData] = useState({
    input_text: "",
    used_clear: false,
  });
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const scrollRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "instant" });
  }, [history]);

  return (
    <div
      className="terminal"
      onClick={() => {
        // Wherever the mouse clicks, input will be focus
        inputRef.current.focus();
      }}
    >
      <div className="terminal_header">
        <img
          src={TerminalSvg}
          alt="terminal"
          className="terminal_svg"
          loading="lazy"
        />

        <p>root@hari: ~</p>

        <img
          src={CloseIcon}
          alt="close"
          className="terminal_svg"
          loading="lazy"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="terminal_container">
        {data?.used_clear === false ? ReactHtmlParser(MOTD_OUTPUT) : ""}
        {history.map((item, index) => {
          return (
            <div key={index}>
              <TerminalInput
                data={data}
                setData={setData}
                disabled={true}
                history={history}
                setHistory={setHistory}
                index={index}
                commandHistory={commandHistory}
                setCommandHistory={setCommandHistory}
              />
              {ReactHtmlParser(item?.output)}
            </div>
          );
        })}
        <TerminalInput
          ref={inputRef}
          data={data}
          setData={setData}
          disabled={false}
          history={history}
          setHistory={setHistory}
          commandHistory={commandHistory}
          setCommandHistory={setCommandHistory}
        />
        <div ref={scrollRef} />
      </div>
    </div>
  );
};

export default Terminal;

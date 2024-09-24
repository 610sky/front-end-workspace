import { useState, useRef, useEffect } from "react";
/*
const Converter = () => {
  const [minutesText, setMin] = useState("");
  const [hoursText, setHour] = useState("");
  const [dis, setDis] = useState(false);
  const convertRef = useRef(false);

  const minWrite = (e) => {
    setMin(e.target.value);
  };

  const hourWrite = (e) => {
    setHour(e.target.value);
  };

  const reset = () => {
    setMin("");
    setHour("");
  };

  const convert = () => {
    convertRef.current = !convertRef.current;
    reset();
  };

  useEffect(() => {
    if (convertRef.current) {
      setHour(parseInt(minutesText / 60));
      setDis(true);
    } else {
      setMin(parseInt(hoursText * 60));
      setDis(false);
    }
  }, [minutesText, hoursText]);

  const Btn = ({ click, text }) => {
    return <button onClick={click}>{text}</button>;
  };

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          ref={convertRef}
          onChange={minWrite}
          value={minutesText}
          disabled={!dis}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          ref={convertRef}
          onChange={hourWrite}
          value={hoursText}
          disabled={dis}
        />
      </p>
      <Btn click={reset} text="Reset" />
      <Btn click={convert} text="Minutes => Hours" />
    </>
  );
};
*/
import Btn from "./Btn";

const Converter = () => {
  const [text, setText] = useState("Minutes => Hours");
  const [bool, setBool] = useState(false);
  const [number, setNumber] = useState("");

  const invert = () => {
    setBool(!bool);
    reset();
  };

  const change = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          type="number"
          placeholder="Minutes"
          disabled={bool}
          onChange={change}
          value={bool ? number * 60 : number}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          type="number"
          placeholder="Hours"
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
          onChange={change}
        />
      </p>
      <Btn click={reset} text="Reset" />
      <Btn click={invert} text={text} />
    </>
  );
};

export default Converter;

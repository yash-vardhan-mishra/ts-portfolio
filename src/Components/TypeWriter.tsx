import { useEffect, useState } from "react";
import './TypeWriterStyles.css'

export interface TypeWriterProps {
  string: string;
  delay?: number;
  stopBlinkinOnComplete?: any;
  className?: string;
  onComplete: () => void;
  cursor?: string;
  cursorClassName?: string;
}

export function TypeWriter({
  string,
  delay = 100,
  stopBlinkinOnComplete = false,
  className,
  onComplete = () => {},
  cursor = "|",
  cursorClassName,
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [pointer, setPointer] = useState(-1);
  const [isBlinking, setBlinking] = useState(true);

  useEffect(() => {
    if (pointer < string.length) {
      setTimeout(() => {
        setText(text + string.charAt(pointer));
        setPointer(pointer + 1);
      }, delay);
    } else {
      if (stopBlinkinOnComplete) setBlinking(false);
      onComplete();
    }
  }, [pointer, delay, onComplete, string, text, stopBlinkinOnComplete]);

  return (
    <span className={className}>
      {text}
      {isBlinking ? <span className={cursorClassName}>{cursor}</span> : null}
    </span>
  );
}

TypeWriter.defaultProps = {
  stopBlinkinOnComplete: false,
  onComplete: () => {},
  cursorClassName: "blinkingCursor",
};

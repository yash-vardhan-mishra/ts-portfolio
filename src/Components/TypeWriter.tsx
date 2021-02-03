import { useEffect } from "react";
import Typed from "typed.js";

export interface TypeWriterProps {
  string: string;
  typeSpeed: number;
}

export function TypeWriter({ string, typeSpeed }: TypeWriterProps) {
  useEffect(() => {
    // Options for the Typed object
    const options = {
      strings: [string],
      typeSpeed: typeSpeed,
    };

    // New Typed instance
    const typed = new Typed("#instruction", options);

    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, [string, typeSpeed]);
  return <span id="instruction"></span>;
}

TypeWriter.defaultProps = {
  typeSpeed: 120,
};

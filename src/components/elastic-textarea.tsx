import React, {
  FC,
  HTMLProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { tripUnit } from "utils/dom";

export interface ElasticTextareaProps extends HTMLProps<HTMLTextAreaElement> {
  maxRows?: number;
}

export const ElasticTextarea: FC<ElasticTextareaProps> = ({
  onChange,
  maxRows,
  ...props
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      adjustHeight(ref.current);
    }
  }, []);
  const numberOfRows = useMemo(() => {
    if (height && ref.current) {
      const styles = window.getComputedStyle(ref.current);
      const lines = height / tripUnit(styles.lineHeight);
      return Math.ceil(lines);
    }
    return 1;
  }, [height]);
  const maxHeight = useMemo(() => {
    if (ref.current) {
      const styles = window.getComputedStyle(ref.current);
      return (maxRows ?? numberOfRows) * tripUnit(styles.lineHeight);
    }
    return 0;
  }, [numberOfRows, maxRows]);
  const adjustHeight = (el: HTMLTextAreaElement) => {
    el.style.minHeight = "0px";
    if (maxHeight && maxHeight < el.scrollHeight) {
      el.style.minHeight = `${maxHeight}px`;
    } else {
      el.style.minHeight = `${el.scrollHeight}px`;
    }
    setHeight(el.scrollHeight);
  };

  return (
    <textarea
      {...props}
      style={{
        height: "auto",
        paddingTop: 0,
        paddingBottom: 0,
        maxHeight,
        resize: "none",
      }}
      ref={ref}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        adjustHeight(e.currentTarget);
      }}
      rows={1}
    />
  );
};

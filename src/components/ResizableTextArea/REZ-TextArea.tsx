import React, { useState, useRef, useEffect } from "react";

const ResizableTextarea: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (textareaRef.current) {
      setHeight(textareaRef.current.scrollHeight);
    }
  }, []);

  const handleChange = () => {
    setHeight(textareaRef.current?.scrollHeight || 0);
  };

  return (
    <textarea
      ref={textareaRef}
      className="shadow appearance-none border border-stone-600 rounded w-full py-2 px-3 pb-10 text-white placeholder-stone-300 resize-none leading-tight focus:outline-none focus:shadow-outline mb-3"
      style={{ height: `${height}px`, overflow: "hidden" }}
      placeholder="Notizen"
      onChange={handleChange}
    />
  );
};

export default ResizableTextarea;

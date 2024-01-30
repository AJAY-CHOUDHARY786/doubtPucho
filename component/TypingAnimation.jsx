import React, { useRef, useEffect } from 'react';

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const TypingAnimation = ({ text }) => {
  const textNode = useRef(null);

  const type = async (text) => {
    for (let character of text) {
      if (textNode.current) {
        textNode.current.innerText += character;
        await sleep(100); // Adjust the delay as needed
      }
    }
  };

  const deleteText = async (text) => {
    for (let character of text) {
      if (textNode.current) {
        textNode.current.innerText = textNode.current.innerText.slice(
          0,
          textNode.current.innerText.length - 1
        );
        await sleep(100); // Adjust the delay as needed
      }
    }
  };

  const animate = async () => {
    await sleep(1000);
    textNode.current.innerText = '';

    while (true) {
      await type(text);
      await sleep(1000);
      await deleteText(text);
    }
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <>
      <span ref={textNode} id="type-text"></span>
      <span className="Newblinking-cursor">|</span>
    </>
  );
};

export default TypingAnimation;

import React, { useEffect } from "react";

export default function ParallaxImages() {
  useEffect(() => {
    const parallax = (event: MouseEvent) => {
      const images = document.querySelectorAll(".mouse");
      images.forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * Number(position)) / 90;
        const y = (window.innerHeight - event.pageY * Number(position)) / 90;
        (
          shift as HTMLElement
        ).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  const images = [
    {
      id: "img1",
      src: "/binary-code.png",
      value: "5",
      style: { top: "30px", left: "240px" },
    },
    {
      id: "img2",
      src: "/code.png",
      value: "-5",
      style: { top: "390px", left: "390px" },
    },
    {
      id: "img3",
      src: "/css-code.png",
      value: "5",
      style: { top: "390px", right: "390px" },
    },
    {
      id: "img4",
      src: "/programmer.png",
      value: "-5",
      style: { top: "460px", left: "60px" },
    },
    {
      id: "img5",
      src: "/set-code.png",
      value: "5",
      style: { top: "330px", right: "30px" },
    },
    {
      id: "img6",
      src: "/sql-code.png",
      value: "-5",
      style: { top: "10px", right: "30px" },
    },
    {
      id: "img7",
      src: "/internet.png",
      value: "5",
      style: { top: "10px", right: "500px" },
    },
    {
      id: "img8",
      src: "/cloud.png",
      value: "-5",
      style: { top: "160px", left: "10px" },
    },
    {
      id: "img9",
      src: "/databases.png",
      value: "5",
      style: { top: "210px", left: "400px" },
    },
    {
      id: "img10",
      src: "/404.png",
      value: "-5",
      style: { top: "550px", left: "600px" },
    },
    {
      id: "img11",
      src: "/bug.png",
      value: "5",
      style: { top: "600px", right: "10px" },
    },
    {
      id: "img12",
      src: "/compssa-logo.png",
      value: "-5",
      style: { top: "120px", right: "200px" },
    },
  ];

  return (
    <div className="w-full h-screen">
      {images.map((image) => (
        <img
          key={image.id}
          id={image.id}
          src={image.src}
          className="mouse absolute hidden md:block"
          value={image.value}
          style={{
            ...image.style,
            height: "150px",
            width: "150px",
          }}
          alt={`Parallax ${image.id}`}
        />
      ))}
    </div>
  );
}

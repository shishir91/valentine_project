import React, { useEffect, useState } from "react";
import please from "./please.png";
import photo1 from "./we/Photo_1.JPG";
import photo2 from "./we/Photo_2.JPG";
import photo3 from "./we/Photo_3.JPG";
import photo4 from "./we/Photo_4.JPG";
import photo5 from "./we/Photo_5.JPG";
import photo6 from "./we/Photo_6.JPG";
import photo7 from "./we/Photo_7.JPG";
import photo8 from "./we/Photo_8.JPG";
import photo9 from "./we/Photo_9.JPG";
import photo10 from "./we/Photo_10.JPG";
import photo11 from "./we/Photo_11.JPG";
import photo12 from "./we/Photo_12.JPG";
import photo13 from "./we/Photo_13.JPG";
import photo14 from "./we/Photo_14.JPG";
import photo15 from "./we/Photo_15.JPG";
import photo16 from "./we/Photo_16.JPG";
import photo17 from "./we/Photo_17.JPG";
import Aos from "aos";
import "aos/dist/aos.css";

const First = () => {
  const [clickYes, setClickYes] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt-zv6CpWn8nnyLt-vjngMCRQ8P9eoacQqsoQd0YReVkzX9_Vv3-stwZutaLNUweFz04&usqp=CAU"
  );
  const [randomPosition, setRandomPosition] = useState({
    position: "relevent",
    x: 0,
    y: 0,
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [clickYes]);

  const handleClick = () => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    setRandomPosition({ position: "absolute", x: randomX, y: randomY });
    setImageSrc(please);
  };

  const clickedYes = () => {
    setClickYes(true);
    setImageSrc(
      "https://media1.tenor.com/m/9mUATMh3_oEAAAAC/peach-and-goma-peach-cat.gif"
    );
  };

  return (
    <div className="main">
      <div
        className="container"
        style={
          clickYes
            ? { display: "none" }
            : {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
              }
        }
      >
        <center>
          <img src={imageSrc} alt="" />
          <br />
          <span>Will You Be My Valentine?</span>
          <br />
          <button onClick={clickedYes} className="butn btn btn-success me-1">
            Yes
          </button>
          <button
            style={{
              position: randomPosition.position,
              left: `${randomPosition.x}px`,
              top: `${randomPosition.y}px`,
            }}
            className="btn btn-danger ms-1"
            onClick={handleClick}
          >
            No
          </button>
        </center>
      </div>
      <div className="main" style={!clickYes ? { display: "none" } : {}}>
        <center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span data-aos="fade-up">Thank You sooo Much 😚😚</span>
          <br />
          <img src={imageSrc} alt="" width={"250px"} data-aos="fade-up" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span data-aos="fade-up">Here, Have a kiss 😘</span>
          <br />
          <img
            data-aos="fade-up"
            src="https://media.tenor.com/qeJtDi4BOkwAAAAi/tkthao219-bubududu.gif"
            alt=""
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span data-aos="fade-up">Some More Kisses 😘</span>
          <br />
          <img
            data-aos="fade-up"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt=""
          />
          <br />
          <br />
          <span data-aos="fade-up">😁🤗😚❣️😘🤗😁</span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span>👇Here are some of our memories together👇</span>
          <div className="container">
            <img
              src={photo1}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo2}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo3}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo4}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo5}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo6}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo7}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo8}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo9}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo10}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo11}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo12}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo13}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo14}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo15}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo16}
              alt=""
              className="photos"
              data-aos="fade-left"
              style={{ marginRight: "250px", marginTop: "100px" }}
            />
            <br />
            <img
              src={photo17}
              alt=""
              className="photos"
              data-aos="fade-right"
              style={{ marginLeft: "250px", marginTop: "100px" }}
            />
          </div>
        </center>
      </div>
    </div>
  );
};

export default First;

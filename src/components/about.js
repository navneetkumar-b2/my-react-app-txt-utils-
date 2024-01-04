import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function about(props) {
  const c0 = "black",
  c1 = "red",
  c2 = "green",
    c3 = "yellow",
    c4 = "blue";
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const btnTxt = "dark mode";
  // const [btnTxt, setbtnTxt] = useState("Enable Dark Mode");
  // const toggleColor = () => {
  //   if (myStyle.color == "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtnTxt("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnTxt("Enable Dark Mode");
  //   }
  // };
  const toggleColor = (color) => {
   if(color=="black")
   setMyStyle({
          color: "white",
          backgroundColor: "black",
        });
   else if(color=="red")
   setMyStyle({
          color: "white",
          backgroundColor: "red",
        });
   else if(color=="yellow")
   setMyStyle({
          color: "black",
          backgroundColor: "yellow",
        });
   else if(color=="blue")
   setMyStyle({
          color: "white",
          backgroundColor: "blue",
        });
   else if(color=="green")
   setMyStyle({
          color: "yellow",
          backgroundColor: "green",
        });



  ;}
  return (
    <>
      <div className="container my-3 text-center">
        <h2> {props.title} </h2>
      </div>
      <div className="container">
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the 
                <code style={myStyle}>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary my-4 bg-black"
          // style={myStyle}
          onClick={() => toggleColor(c0)}
        >
          {btnTxt}
        </button>
      </div>
      <div class="container text-center">
        <div class="container text-center">
          <div class="container text-center">
            <div class="row row-cols-auto">
              <button class="bg-danger" onClick={() => toggleColor(c1)}>
                <div  class="col">
                  red
                </div>
              </button>
              <button class="bg-success"onClick={() => toggleColor(c2)}>
                <div  class="col">
                  green
                </div>
              </button>
              <button class="bg-warning" onClick={() => toggleColor(c3)}>
                <div  class="col">
                  yellow
                </div>
              </button>
              <button class="bg-info" onClick={() => toggleColor(c4)}>
                <div  class="col">
                  blue
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }

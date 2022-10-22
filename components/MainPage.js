import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Wrapper style={{ backgroundImage: "url(ZigZag.png)" }}>
      <div className="white-container">
        <img className="close-icon" src="food-close-x.png" alt="close-icon" />
        <div className="flex-container">
          <img className="main-image" src="food-happy.png" alt="main-image" />
          <div className="content">
            <div className="header">
              <h3>Confirmation</h3>
            </div>
            <div className="details">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                sint non, adipisci nisi ullam alias tempora molestias dolor.
                Placeat, similique.
              </p>
            </div>
          </div>
          <div className="menu-container">
            <img
              className="burger-image"
              src="Rectangle.png"
              alt="burger-image"
            />
            <div className="burger-details">
              <h4>Big Mac Menu</h4>
              <p>$29.99</p>
            </div>
            <button>Change</button>
          </div>
          <button className="btn">I'm Ready to Eat!</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-size: cover;
  overflow: auto;
  min-height: 100vh;
  .white-container {
    margin: 9rem 2.4rem;
    /* min-height: 80vh; */
    /* height: 56rem; */
    background-color: #fff;
    box-shadow: 0px 40px 40px -20px #3c7b61;
    border-radius: 5px;
    position: relative;
    .close-icon {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
    }
    .flex-container {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
      align-items: center;
      padding: 5rem 1rem;
      .main-image {
      }
      .content {
        text-align: center;
        .header {
          font-size: 2.2rem;
          font-weight: 500;
        }
        .details {
          padding: 0 3.5rem;
          font-size: 1.4rem;
          line-height: 26px;
          text-align: center;
        }
      }
      .menu-container {
        background-color: #f0fff5;
        display: flex;
        align-items: center;
        width: 90%;
        gap: 2rem;
        /* justify-content: space-between; */
        .burger-image {
          width: 54px;
          height: 66px;
        }
        .burger-details {
          h4 {
            font-size: 1.6rem;
            letter-spacing: 0.1px;
            font-weight: 800;
            font-size: 14px;
            line-height: 17px;
          }
          p {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }
        button {
          margin-left: 4.5rem;
          font-weight: 700;
          font-size: 13px;
          line-height: 16px;
          font-family: var(--ff-primary);
          border: 0;
          color: #467a66;
          background-color: transparent;
          text-decoration-line: underline;
        }
      }
      .btn {
        background-color: #46a67e;
        box-shadow: 0px 20px 20px rgba(103, 189, 153, 0.2);
        border-radius: 5px;
        border: 0;
        color: #fff;
        width: 90%;
        padding: 1.5rem 7rem;
        font-size: 2rem;
        font-family: var(--ff-primary);
        font-weight: 700;
      }
    }
  }
`;

export default MainPage;

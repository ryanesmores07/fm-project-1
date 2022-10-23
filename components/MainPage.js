import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Wrapper style={{ backgroundImage: "url(ZigZag.png)" }}>
      <div className="white-container second">
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
            <a href="#">Change</a>
          </div>
          <button className="btn">I'm Ready to Eat!</button>
          <div className="dots-container">
            <div className="dots"></div>
            <div className="dots green"></div>
            <div className="dots"></div>
          </div>
        </div>
      </div>

      <div className="white-container first">
        <img className="close-icon" src="food-close-x.png" alt="close-icon" />
        <div className="flex-container">
          <img className="main-image" src="hamburger+1.png" alt="main-image" />
          <div className="content">
            <div className="header">
              <h3>Choose a dish</h3>
            </div>
            <div className="details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis duis posuere accumsan, in ut vel iaculis fusce
                posuere.
              </p>
            </div>
          </div>

          <button className="btn">Next →</button>
          <div className="dots-container">
            <div className="dots green"></div>
            <div className="dots "></div>
            <div className="dots"></div>
          </div>
        </div>
      </div>

      <div className="white-container third">
        <img className="close-icon" src="food-close-x.png" alt="close-icon" />
        <div className="flex-container">
          <img
            className="main-image"
            src="delivery-man+1.png"
            alt="main-image"
          />
          <div className="content">
            <div className="header">
              <h3>Your order process begins</h3>
            </div>
            <div className="details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis duis posuere accumsan, in ut vel iaculis fusce
                posuere.
              </p>
            </div>
          </div>

          <button className="btn">Track on the map</button>
          <div className="dots-container">
            <div className="dots"></div>
            <div className="dots "></div>
            <div className="dots green"></div>
          </div>
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
    /* margin: 9rem 2.4rem; */
    margin: 9rem auto;
    width: 41rem;
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
          width: 70%;
          margin: 0 auto 3rem;
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
          color: #2f463d;
          width: 50%;
          h4 {
            font-size: 1.6rem;
            letter-spacing: 0.1px;
            font-weight: 800;
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 0.5rem;
          }
          p {
            color: #7a8f85;

            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }
        a {
          /* margin-left: 3rem; */
          font-weight: 700;
          padding-right: 3rem;
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
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 5px;
        border: 0;
        color: #fff;
        width: 90%;
        padding: 1.5rem 7rem;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 3rem;
        &:hover {
          background: #59d2a0;
          box-shadow: 0px 20px 20px rgba(103, 189, 153, 0.2);
          border-radius: 5px;
        }
      }
      .dots-container {
        display: flex;
        gap: 2rem;
        position: absolute;
        bottom: 2rem;
        & > * {
          width: 1rem;
          height: 1rem;
          background-color: #e0e0e0;
          margin-bottom: 1rem;
          border-radius: 50%;
        }
        & > *.green {
          background-color: #67bd99;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10rem 5rem;
    justify-items: center;
    /* gap: 3rem; */

    .white-container {
      width: 100%;
      margin: 0;
      .flex-container {
        .main-image {
          width: 15rem;
          height: 15rem;
        }
        .content {
          .header {
            font-size: 2.8rem;
            line-height: 1.3;
            height: 6rem;
          }
          .details {
            font-size: 1.6rem;
            line-height: 2;
          }
        }
        .btn {
          width: 80%;
          white-space: nowrap;
        }
      }
    }
    .white-container.first,
    .white-container.third {
      .content {
        .header {
        }
        .details {
        }
      }
      .btn {
        position: absolute;
        bottom: 8rem;
        background-color: #bdbdbd;
        box-shadow: 0px 20px 20px rgba(167, 167, 167, 0.2);
        filter: none;
      }
    }
    .white-container.first {
      grid-row: 1 / 2;
    }
    .white-container.second {
      transition: transform 100ms ease-in;
      transform: scale(1.1);
      z-index: 1;
      .flex-container {
        .menu-container {
          width: 80%;
        }
      }
    }
    .white-container.third {
    }
  }
`;

export default MainPage;

import styled from "styled-components";

const UserNavStyle = styled.section`
  .nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .nav a,
  .nav button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  .nav a:hover,
  .nav a:focus,
  .nav button:hover,
  .nav button:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }
  .nav a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }
  .nav a.active svg > * {
    fill: #fb1;
  }
  .navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
  }

  .navMobileActive {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    pointer-events: initial;
    z-index: 100;
  }

  .navMobile a,
  .navMobile button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
  }
  .navMobile a:hover svg > *,
  .navMobile button:hover > svg * {
    fill: #fb1;
  }

  .navMobile button {
    border-bottom: none;
  }
  .navMobile svg {
    margin-right: 0.5rem;
  }
`;
const UserHeaderStyle = styled.section`
  header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
    position: relative;
  }
`;

const MobileButtonStyle = styled.menu`
  .mobileButton {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }
  .mobileButton::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
  .mobileButton:focus,
  .mobileButton:hover,
  .mobileButtonActive {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
  .mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor 0 -8px currentColor;
  }
`;

const PhotoPostStyle = styled.section`
  .photoPost {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 40rem) {
    .photoPost {
      grid-template-columns: 1fr;
    }
  }
  .file {
    margin-bottom: 1rem;
  }
  .preview {
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;
  }
  .preview::after {
    content: "";
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;

export { UserNavStyle, UserHeaderStyle, MobileButtonStyle, PhotoPostStyle };

import styled from "styled-components";

const ImageSkeleton = styled.div`
  .wrapper {
    display: grid;
  }
  img {
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
  }
  .skeleton {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
  }
  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200px;
    }
  } ;
`;

const LoadingStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;

  .loading {
    margin: auto;
    width: 80px;
    height: 80px;
    padding-left: 5px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

export { ImageSkeleton, LoadingStyle };

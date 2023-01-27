import styled from "styled-components";

const FeedPhotosStyle = styled.div`
  .feed {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    justify-items: center;
  }
  @media (max-width: 40rem) {
    .feed {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
const FeedModalStyle = styled.div`
  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
  }
  @media (max-width: 40rem) {
    .modal {
      padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }
  }
`;

export { FeedPhotosStyle, FeedModalStyle };

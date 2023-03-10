import styled from "styled-components";
import visualizacao from "../../Assets/visualizacao-black.svg";

const PhotoContentStyle = styled.div`
  .photoContent {
    margin: auto;
    height: 40rem;
    border-radius: 0.2rem;
    background: white;
    display: grid;
    grid-template-columns: 40rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    animation: scaleUp 0.3s forwards;
  }
  .single.photoContent {
    grid-template-columns: 1fr;
    height: auto;
  }
  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }
  .details {
    padding: 2rem 2rem 0 2rem;
  }
  .single .details {
    padding: 1rem 0px 0px 0px;
  }
  .imgContent {
    grid-row: 1/4;
  }
  .single .imgContent {
    grid-row: 1;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  @media (max-width: 64rem) {
    .photoContent {
      height: auto;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
      grid-template-columns: minmax(20rem, 40rem);
    }
    .imgContent {
      grid-row: 1;
    }
  }
  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .author a:hover {
    text-decoration: underline;
  }
  .visualizacoes::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${visualizacao});
  }
  .attributes {
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .attributes li {
    margin-right: 2rem;
  }
  .attributes li::before {
    content: "";
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
    margin-top: 5px;
  }
`;

const CommentStyle = styled.div`
  .comments {
    height: 20rem;
    overflow-y: auto;
    word-break: break-word;
    padding: 2rem;
  }
  .single.comments {
    height: auto;
    padding: 0px;
  }
  .comments li {
    margin-bottom: 0.5rem;
    line-height: 1.2rem;
  }
`;

const FormCommentsStyle = styled.div`
  .formComment {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;
  }
  .single.formComment {
    margin: 1rem 0;
  }
  .formTextarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 0.2rem;
    background: #eee;
    transition: 0.2s;
  }

  .formTextarea:focus,
  .formTextarea:hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
  .buttonFormComment {
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;
  }
  .buttonFormComment:focus,
  .buttonFormComment:hover {
    outline: none;
  }
  .buttonFormComment:focus svg path,
  .buttonFormComment:hover svg path {
    fill: #fea;
    stroke: #fb1;
  }
  .buttonFormComment:focus svg g,
  .buttonFormComment:hover svg g {
    animation: latir 0.6s infinite;
  }

  @keyframes latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } ;
`;

const ButtonDeleteStyle = styled.div`
  .buttonPhotoDelete {
    background: #ddd;
    padding: 0.3rem 0.6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: 0.875rem;
    font-family: var(--type-first);
    cursor: pointer;
    border-radius: 0.4rem;
    transition: 0.1s;
  }
  .buttonPhotoDelete:focus,
  .buttonPhotoDelete:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;

export {
  PhotoContentStyle,
  CommentStyle,
  FormCommentsStyle,
  ButtonDeleteStyle,
};

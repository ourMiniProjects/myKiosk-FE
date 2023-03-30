import styled from "styled-components";

export const StLayoutStart = styled.div`
  .card {
    width: 190px;
    height: 254px;
    overflow: visible;
    cursor: pointer;

    &::before,
    .content {
      border-radius: 5px;
      box-shadow: 0px 0px 5px 1px #00000022;
      transition: transform 300ms, box-shadow 200ms;
    }

    &::before {
      position: absolute;
      content: " ";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #ee9933;
      transform: rotateZ(5deg);
    }

    .description {
      width: 100%;
      text-align: center;
      font-size: 16pt;
      color: #898989;
    }

    .info {
      color: #00000066;
    }

    .price::before {
    }

    .price {
      font-weight: bold;
      font-size: 40pt;
      /* font-family: "FlyingBird"; */
      color: #ee9933;
    }

    .description p {
      /* margin-bottom: 10px; */
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: rotateZ(-7deg);
    }

    &:hover::before,
    &:hover .content {
      transform: rotateZ(0deg);
    }

    &:active::before,
    &:active .content {
      box-shadow: none;
    }
  }
`;

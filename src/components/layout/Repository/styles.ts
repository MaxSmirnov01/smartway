import styled from 'styled-components';

export const ItemContainer = styled.li`
  width: 600px;
  height: 220px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);

  overflow: hidden;
  cursor: pointer;

  &:hover {
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  }
`;

export const ItemImg = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
  padding: 16px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 16px;
  flex-grow: 1;
  gap: 10px;
  overflow: hidden;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 24px;
`;

export const CardText = styled.strong`
  font-size: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  padding: 5px 15px;
`;

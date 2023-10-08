import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
`;

export const Header = styled.header`
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const NavItem = styled(NavLink)`
  font-size: 700;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }

  }
`;

export const Form = styled.form`
  display: flex;
  gap: 15px;

  > input {
    width: 350px;
    padding: 7px;
  }
`;

export const Box = styled.div`
  border-bottom: 1px solid #727272;
  padding: 15px;

  p {
    padding-left: 15px;
  }
`;

export const MoreInfoList = styled.ul`
  text-decoration: none;
  list-style: none;
  margin-top: 15px;
  padding-left: 20px;
`;

export const MoreInfoLink = styled(NavLink)`
  display: flex;
  width: 60px;
  text-align: center;

  padding: 5px;
  color: black;
  text-decoration: none;
  list-style: none;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

export const GoBack = styled(Link)`
  padding: 3px;
  display: flex;
  justify-content: center;
  width: 100px;
  color: black;
  text-align: center;
  text-decoration: none;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  background-color: lightgray;
  padding: 10px 20px;
  gap: 5px;
  svg {
    width: 20px;
    height: 15px;
  }
`;

export const MoviesList = styled.ul`
  padding: 20px;
  font-size: 20px;
`;

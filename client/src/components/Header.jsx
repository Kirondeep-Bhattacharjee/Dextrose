import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #EADBC8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>FEATURED</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

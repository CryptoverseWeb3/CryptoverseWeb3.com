import styled from 'styled-components';

export const CryptocurrenciesContainer = styled.div``;

export const SearchContainer = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: white;
  background: #fff;
  margin: 10px 10px 10px 5px;
  overflow: hidden;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CryptocurrenciesCard = styled.div`
  color: white;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 340px;
  margin: 5px;
  overflow: hidden;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CryptoCardHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  align-items: start;
  text-align: start;
  margin-bottom: 10px;
`;

export const CryptocurrenciesName = styled.h1`
  width: 90%;
  color: #d7d7d7;
  font-size: 1.5rem;
`;
export const CryptocurrenciesImage = styled.img`
  width: 10%;
`;

import styled from "styled-components";


export const HeaderCenterWrapper = styled.div`

.search-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    padding: 0 8px;
    box-sizing: border-box;

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon{
      display: flex;
      justify-content: center;
      align-items:center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
    ${props=>props.theme.mixin.boxShadow}
}
`
import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

.page{
    margin-bottom: 20px;
}
.ant-pagination li{
 
    border-radius: 50%;
    &:hover{
        border-color: #000;
        transform: scale(1.1);
        a{
            color: #ccc;
        }
    }
}

//上一页
.ant-pagination-prev{   
    .ant-pagination-item-link{
        border: 0;
        
    }
}

/* 下一页 */
.ant-pagination-next{
  .ant-pagination-item-link{
      border: 0;
  }
}
/* 当前选中的 */
.ant-pagination-item-active{
    border-color: #fff;
    background-color: #000;
    a{
        color: #fff;
    }
}
`
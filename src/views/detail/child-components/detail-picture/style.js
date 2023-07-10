import styled from "styled-components";

export const DetailPictureWrapper = styled.div`
position: relative;  //为了查看图片的按钮定位
 > .top{
    display: flex;
    height: 600px;

    /* 如果有鼠标放入 top整个 布局中 覆盖层就出现 就有灰色阴影*/
    &:hover{
        .cover{
            opacity: 1 !important;
        }
       
    }
    /* 如果是top里的某个item被鼠标经过，item当前的这早曾就消失透明 没有灰色阴影了 */
    .item:hover{
        .cover{
            opacity: 0 !important;
        }
    }
}

 

 .left , .right{
    width: 50%;
    height: 100%;

    .item{
        position: relative;
        height: 100%;
        cursor: pointer;
        overflow: hidden;  //为了去除图片放大时候多余的部分
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in;
        }

        .cover{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color:rgba(0,0,0,.5);

            opacity:0 ;//覆盖层透明就是 差不多就是覆盖层消失了 能看见图片了
            transition: opacity 200ms ease;  //慢慢变透明
        }
        &:hover {
            img{
                transform: scale(1.1);
            }
        }
    }
  }
  .right{
    display: flex;
    flex-wrap: wrap;
    .item{
        height: 50%;
        width: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
    }
  }
  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: all 200ms ease; 

    &:hover{
    background-color: rgba(0,0,0,.5);
    color: #fff;
    }
  }
`

import YXRequest from ".."


// entire页的    数据
export function getEntire(offset=0,size=20){
  return  YXRequest.get({
    url:'/entire/list',
    params:{
        offset,
        size
    }
  })
}
 
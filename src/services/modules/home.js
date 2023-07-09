import YXRequest from ".."


// home页的高性价比数据
export function getHomeGoodPriceData(){
  return  YXRequest.get({
    url:'/home/goodprice'
  })
}
 
// home页的高分好评数据
export function getHomeHighScoreData(){
  return  YXRequest.get({
    url:'/home/highscore'
  })
}
 
// home页热门目的地（折扣）数据
export function getHomeDiscountData(){
  return  YXRequest.get({
    url:'/home/discount'
  })
}

// home页热门推荐数据
export function getHotRecommend(){
  return  YXRequest.get({
    url:'/home/hotrecommenddest'
  })
}

// home页向往的城市数据
export function getLongForData(){
  return  YXRequest.get({
    url:'/home/longfor'
  })
}

// home页plus数据
export function getPlusData(){
  return  YXRequest.get({
    url:'/home/plus'
  })
}

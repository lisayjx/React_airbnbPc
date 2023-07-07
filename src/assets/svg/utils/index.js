/**
 * 
 *  比如在react的jsx文件 里出现了 
 * 行内的 <div style="color:red;background-color:orange"> 这样不对 因为jsx文件需要写成对象形式
 * <div style={{color:"red";backgroundColor:"orange"}}>
 *   
 */

function styleStrToObj(styleStr){
    const obj = {}

    const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    }).replace(/;\s?$/g,"").split(/:|;/g);

    for (var i = 0; i < s.length; i += 2) {
        obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
    }
    
    return obj;
  }
  
  export {
    styleStrToObj
  }
import Axios from 'axios'
import URLs from './URLs'

const appkey = '13287196612_1569588636368';

const Request = Axios.create({
  baseURL: URLs.base,
  method: 'GET'
})

// const source=Axios.CancelToken.source();

//响应拦截器
Request.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data;
  }
})

const requestObj = {
  //获取当前位置信息
  getPosition() {
    return Request({
      url: URLs.getPosition,
      params: {
        appkey
      }
    })
  },
  //获取热门搜索
  getHotSearch() {
    return Request({
      url: URLs.getHotSearch,
      params: {
        appkey
      }
    })
  },
  //搜索列表
  getSearchList() {
    return Request({
      url: URLs.getSearchList,
      params: {
        appkey
      }
    })
  },
  // 获取左侧菜单
  getLeftNav() {
    return Request({
      url: URLs.getLeftNav,
      params: {
        appkey
      }
    })
  },
  //有格调
  getYGD() {
    return Request({
      url: URLs.getYGD,
      params: {
        appkey
      }
    })
  },
  //获取省份
  getProvince() {
    return Request({
      url: URLs.getProvince,
      params: {
        appkey
      }
    })
  },
  //获取热门城市
  getHotCity() {
    return Request({
      url: URLs.getHotCity,
      params: {
        appkey
      }
    })
  },
  //获取最近搜索城市
  getRencentlySearchCity() {
    return Request({
      url: URLs.getRencentlySearchCity,
      params: {
        appkey
      }
    })
  },
  getAllCity() {
    return Request({
      url: URLs.getAllCity,
      params: {
        appkey
      }
    })
  },
  getGoodsList() {
    return Request({
      url: URLs.getGoodsList,
      params: {
        appkey
      }
    })
  },
  /**
   * {userName,password}
   */
  login(obj) {
    return Request({
      url: URLs.login,
      params: {
        appkey,
        ...obj
      }
    })
  },
  /**
   * 
   * @param {*} userName 
   * @param {*} password 
   * @param {*} rePassword 
   */
  register(obj) {
    return Request({
      url: URLs.register,
      params: {
        appkey,
        ...obj
      }
    })
  },
}




export default requestObj;
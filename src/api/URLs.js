export default {
  base: 'https://open.duyiedu.com',

  getPosition:'/api/meituan/city/getPosition.json',

  getHotSearch: '/api/meituan/header/searchHotWords.json',
  getSearchList: '/api/meituan/header/search.json',

  getLeftNav: '/api/meituan/index/nav.json',

  getYGD:'/api/meituan/index/resultsByKeywords.json',

  getProvince:'/api/meituan/city/province.json',
  getHotCity:'/api/meituan/city/hot.json',
  getRencentlySearchCity:'/api/meituan/city/recents.json',
  getAllCity:'/api/meituan/city/cityList.json',

  getGoodsList:'/api/meituan/list/goodsList.json',

  login:'/api/meituan/login',
  register:'/api/meituan/register'
}

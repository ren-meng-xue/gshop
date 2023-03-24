//通过mutations间接更新state的多个方法的对象
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from "./mutation-types.js";
import { reqAddress, reqCategorys, reqShops } from '../api'
export default {
  // 这个里面要有三个能跟后台交互的异步的action


  // 异步获取地址

  async getAddress ({ commit, state }) {
    //发送异步ajax请求
    const geohash = state.longitude + ',' + state.latitude//先是纬度 再是经度 拼着传递给接口
    //  const result = await reqAddress(geohash)
    //  const result = require('../data/getAddress.json')
    // const result ={
    //   "code": 0,
    //   data: [
    //             {
    //               name: "肯德基",
    //               address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
    //               id: 1,
    //               latitude: 31.38098,
    //               longitude: 121.50146,
    //               location: [
    //                 121.50146,
    //                 31.38098
    //               ],
    //               phone: "1232313124324",
    //               category: "快餐便当/简餐",
    //               supports: [
    //                 {
    //                   description: "已加入“外卖保”计划，食品安全有保障",
    //                   icon_color: "999999",
    //                   icon_name: "保",
    //                   id: 7,
    //                   name: "外卖保",
    //                   _id: "591bec73c2bbc84a6328a1e5"
    //                 }
    //               ],
    //               status: 0,
    //               recent_order_num: 615,
    //               rating_count: 389,
    //               rating: 1.6,
    //               promotion_info: "他依然有人有人有人有人有人",
    //               piecewise_agent_fee: {
    //                 tips: "配送费约¥5"
    //               },
    //               opening_hours: [
    //                 "8:30/20:30"
    //               ],
    //               license: {
    //                 catering_service_license_image: "",
    //                 business_license_image: ""
    //               },
    //               is_new: true,
    //               is_premium: true,
    //               image_path: "/img/shop/15c1513a00615.jpg",
    //               identification: {
    //                 registered_number: "",
    //                 registered_address: "",
    //                 operation_period: "",
    //                 licenses_scope: "",
    //                 licenses_number: "",
    //                 licenses_date: "",
    //                 legal_person: "",
    //                 identificate_date: null,
    //                 identificate_agency: "",
    //                 company_name: ""
    //               },
    //               float_minimum_order_amount: 20,
    //               float_delivery_fee: 5,
    //               distance: "19.5公里",
    //               order_lead_time: "40分钟",
    //               description: "好吃的",
    //               delivery_mode: {
    //                 color: "57A9FF",
    //                 id: 1,
    //                 is_solid: true,
    //                 text: "蜂鸟专送"
    //               },
    //               activities: [
    //                 {
    //                   icon_name: "减",
    //                   name: "满减优惠",
    //                   description: "满30减5，满60减8",
    //                   icon_color: "f07373",
    //                   id: 1,
    //                   _id: "591bec73c2bbc84a6328a1e7"
    //                 }
    //               ],
    //             }
    //           ]
    // }
    //  if(result.code==0){
    //   const address = {}
    //   commit(RECEIVE_ADDRESS,{address})//名字不能随便写
    //  }
    const address = {
      address: "北京市昌平区337省道",
      city: "北京市",
      geohash: "40.10038,116.36867",
      latitude: "40.10038",
      longitude: "116.36867",
      name: "昌平区北七家宏福科技园(337省道北)"
    }
    commit(RECEIVE_ADDRESS, { address })//名字不能随便写
    //提交一个mutaition
  },
  // 异步获取食品分类列表

  // 异步获取分类列表
  async getCategorys ({ commit }) {
    // const result = await reqCategorys()
    // const result = require('../data/getCategorys.json')
    commit(RECEIVE_CATEGORYS, { categorys: 111 })
  },
  // 异步获取商家列表
  async getShops ({ commit, state }) {
    const { latitude, longitude } = state
    // const result = await reqShops({latitude, longitude})
    // const result = require('../data/getShops.json')
    commit(RECEIVE_SHOPS, { shops: 222 })
  }
}
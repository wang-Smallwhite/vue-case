import request from '@/utils/request'
export default {
  login: (data) => {
    return request({
      // url: '/ghretail/pos/admin/branchLogin',
      url: '/login',
      method: 'post',
      data
    })
  },

  getCaptcha: (data) => {
    return request({
      url: '/public/getCaptcha',
      method: 'get',
      data
    })
  }
}
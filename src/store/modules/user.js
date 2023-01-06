import api from '@/api/index'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
/**
 * 初始状态
*/
const state = {
  token: '',
  name: '',
  roles: [],
}

/**
 * 同步更改方法
*/
const mutations = {
  SET_TOKEN: (state, token) =>{
    state.token = token;
  }, 
  SET_NAME: (state, name)=>{
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}


/**
 * 异步更改初始化状态方法
 * 
*/

const actions = {
  login({ commit }, userInfo){
    const {username, password} = userInfo;
    return new Promise((resolve, reject) => {
      api.login({ username: username.trim(), password: password }).then(response => {
        console.log(response)
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        console.log(getToken())
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  loginOut({commit, state, dispatch}){
    return new Promise((resolve, reject) => {
      removeToken()
      resetRouter()
      resolve()
    })
  }
}









export default {
  namespaced: true,
  state,
  mutations,
  actions
}
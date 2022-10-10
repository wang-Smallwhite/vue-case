







/**
 * 初始状态
*/
const state = {
  name: '',
  avatar: '',
  roles: []
}

/**
 * 同步更改方法
*/
const mutations = {
  SET_NAME: (state, name)=>{
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
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
  setMenu({commit}, menu) {
    commit('SET_NAME', menu)
  }
}









export default {
  namespaced: true,
  state,
  mutations,
  actions
}
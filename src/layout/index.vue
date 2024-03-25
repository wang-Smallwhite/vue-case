<template>
  <el-container>
    <el-header><Navbar /></el-header>
    <el-container>
      <Sidebar class="sidebar-container" />
      <el-main class="main-container">
        <router-view :key="key"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Sidebar, Navbar } from './components'

export default {
  components: {
    Navbar,
    Sidebar,
    // AppMain
  },
  computed: {
    key() {
    return  this.$route.path
  },
  },
  
};
</script>

<style lang="less" scoped>
.el-container {
  width: 100vw;
  height: 100vh;
}

.sidebar-container {
  transition: width 0.28s;
    width: 210px !important;
    z-index: 1001;
    overflow: hidden;
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
      overflow-x: hidden !important;
    }

    // .el-scrollbar__bar.is-vertical {
    //   right: 0px;
    // }

    // .el-scrollbar {
    //   height: 100%;
    // }

    &.has-logo {
      .el-scrollbar {
        height: calc(100% - 50px);
      }
    }

    .is-horizontal {
      display: none;
    }

    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }

    .svg-icon {
      margin-right: 16px;
    }

    .sub-el-icon {
      margin-right: 12px;
      margin-left: -2px;
    }

    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }

    // menu hover
    .submenu-title-noDropdown,
    .el-submenu__title {
      &:hover {
        background-color: #263445 !important;
      }
    }

    .is-active>.el-submenu__title {
      color: #f4f4f5 !important;
    }
}
.main-container {
    min-height: 100%;
    transition: margin-left .28s;
    position: relative;
  }
</style>
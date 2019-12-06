<template>
  <div class="app">
    <div class="login">
      <div class="header">CMS内容管理系统</div>
      <div class="body">
        <el-input class="user" placeholder="用户名" suffix-icon="el-icon-s-custom"></el-input>
        <el-input class="psw" placeholder="密码" suffix-icon="el-icon-s-opportunity"></el-input>
        <div>
          <el-input class="verify" placeholder="验证码"></el-input>
          <img class="img" src alt />
        </div>
      </div>
      <div class="footer">
        <el-checkbox>记住我</el-checkbox>
        <el-button type="primary" style="width:120px" icon='el-icon-circle-check'>登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.app {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background-color: skyblue;
  .login {
    width: 500px;
    height: 400px;
    padding: 0 30px;

    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: {
      left: -250px;
      top: -200px;
    }
    .header {
      line-height: 100px;
      font-size: 30px;
      letter-spacing: 5px;
      border-bottom: 2px solid skyblue;
      color: skyblue;
      text-align: center;
    }
    .body {
      padding: 30px 0px;

      .psw {
        margin: 25px 0;
      }
      .verify {
        width: 65%;
      }
      .img{
        width: 35%;
        background-color:red;
      }
    }
    .footer {
      height: 100px;
      .el-checkbox {
        float: left;
      }
      .el-button {
        float: right;
      }
    }
  }
}
</style>

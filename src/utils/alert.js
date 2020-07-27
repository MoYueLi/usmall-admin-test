import Vue from 'vue'

let vm = new Vue()

// 成功弹窗
export const successAlert = (msg) => {
  vm.$message({
    message: msg,
    type: 'success'
  })
}

// 警告弹窗
export const warningAlert = (msg) => {
  vm.$message({
    message: msg,
    type: 'warning'
  })
}

// 错误弹框
export const errorAlert = (msg) => {
  vm.$message.error(msg)
}

// 确认弹窗
export const confirmBox = (msg, callback) => {
  vm.$confirm(msg, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(callback)
    .catch(() => {
      vm.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
}

function toast(title, icon, duration) {
  uni.showToast({
    title,
    icon,
    duration
  });
}
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}
toast.loading = function(title, duration = 3000) {
  uni.showToast({
    title: '加载中...',
    icon: 'loading',
    duration
  })
}
export default toast

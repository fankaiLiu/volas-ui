export const netWorkStatuses = [{
  label: '正常网络',
  value: 1
}, {
  label: '断网',
  value: 0
}, {
  label: '不稳定网络',
  value: 2
}];
export const currentStatus = 1;


export const currentMode = 1;

// 静默提交固定参数
export const silentConfig = {
  behavior: () => 'silent',//: 'static',
  retryError: /network error/,
  maxRetryTimes: 5,
  backoff: {
    delay: 2000,
    multiplier: 1.5,
    endQuiver: 0.5
  }
}
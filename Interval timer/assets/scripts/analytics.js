
const intervalId = setInterval(() => {
  console.log('Sending analytics data...')
}, 2000);

document.getElementById('stop_analytics_btn').addEventListener('click', () => {
  clearInterval(intervalId);
});
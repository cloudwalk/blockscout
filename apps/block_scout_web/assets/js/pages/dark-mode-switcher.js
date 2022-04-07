import $ from 'jquery'

$('.dark-mode-changer').click(function () {
  // if (localStorage.getItem('current-color-mode') === 'dark') {
  //   localStorage.setItem('current-color-mode', 'light')
  // } else {
  //   localStorage.setItem('current-color-mode', 'dark')
  // }
  // reload each theme switch
  // todo: revert chages on this file to enable darkmode again
  localStorage.setItem('current-color-mode', 'light')
  document.location.reload(true)
})

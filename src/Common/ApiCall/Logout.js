export default function logout() {
  localStorage.removeItem('authToken')
  window.location.reload()
}
// variaveis: let ou const
// let pode mudar o conteudo e const nao muda
const linksSocialMedia = {
  github: 'BrS1lva',
  youtube: 'channel/UCF1-9mm6L-0gegy4zUUiTwQ',
  facebook: 'r.php?locale=pt_BR&display=page',
  instagram: 'brs1lva',
  twitter: 'i/flow/signup?'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGitHub.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

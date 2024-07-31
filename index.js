
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData= 
    {
        "login": "montychaudhary",
        "id": 51244296,
        "node_id": "MDQ6VXNlcjUxMjQ0Mjk2",
        "avatar_url": "https://avatars.githubusercontent.com/u/51244296?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/montychaudhary",
        "html_url": "https://github.com/montychaudhary",
        "followers_url": "https://api.github.com/users/montychaudhary/followers",
        "following_url": "https://api.github.com/users/montychaudhary/following{/other_user}",
        "gists_url": "https://api.github.com/users/montychaudhary/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/montychaudhary/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/montychaudhary/subscriptions",
        "organizations_url": "https://api.github.com/users/montychaudhary/orgs",
        "repos_url": "https://api.github.com/users/montychaudhary/repos",
        "events_url": "https://api.github.com/users/montychaudhary/events{/privacy}",
        "received_events_url": "https://api.github.com/users/montychaudhary/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Manoj Kumar Chaudhary",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 2,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2019-05-31T17:56:40Z",
        "updated_at": "2024-07-31T18:21:56Z"
    }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send("@montychau04")
})

app.get('/login',(req, res) =>{
    res.send("<h1>Cannot login</h1>")
})

app.get('/youtube',(req, res) =>{
    res.send("<h2>Welcome to Node Backend</h2>")
})

app.get('/github',(req, res) =>{
    res.json(githubData)

})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
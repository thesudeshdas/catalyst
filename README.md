<a style="color:Black; cursor:pointer; text-decoration:none; display:block;" href='https://catalyst-react.netlify.app' target='blank'><h1 align='center'>Catalyst</h1></a>

<a style="cursor:pointer; text-decoration:none;" href='https://catalyst-react.netlify.app' target='blank'>![Catalyst](/docs/catalystLong.png)</a>

Catalyst is a portfolio sharing platform for developers.
Show the world what you've been working on.

## Tech Stack

<img src="https://github-readme-tech-stack.vercel.app/api/cards?showBorder=false&width=800&lineCount=&hideBg=true&hideTitle=true&line1=react,react,61DAFB;redux,redux%20toolkit,764ABC;typescript,typescript,3178C6;chakra%20ui,chakra%20ui,319795;react%20router,react%20router%20v6,CA4245;" alt="My Tech Stack" />

## Important Links

- [Live Preview](https://catalyst-react.netlify.app)

- [Catalyst Backend](https://github.com/thesudeshdas/catalyst-backend)

## Features

<div style="display: flex; width: 100%; justify-content: space-between;"> 
  <div>
  
**Auth**

- User Authentication

- Sign-in, Sign-up & Logout

**Post**

- Single Post
- Create a post
- Edit a post
- Like / Unlike Post
- Comment on Post
  </div>

  <div>

**Profile**

- User Profile
- Edit Profile
- Follow / Unfollow User

**Misc**

- Error page

- Filtering
  </div>

</div>

## Run Locally

> ❗Make sure to install the [Backend](https://github.com/thesudeshdas/catalyst-backend) prior to the following steps.

1 - Clone the project

```bash
  git clone https://github.com/thesudeshdas/catalyst.git
```

2 - Go to the project directory

```bash
  cd catalyst
```

3 - Install dependencies

```bash
  npm install
```

4 - Add environment variables

```bash
  REACT_APP_POSTS_API_URL
  REACT_APP_AUTH_URL
  REACT_APP_CLOUDINARY_URL
```

5 - Start the server

```bash
  npm run start
```

## Environment Variables

> 💡 To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_POSTS_API_URL` -
The URL for `/posts` API (ex - http://localhost:8000/posts)

`REACT_APP_AUTH_URL` - The URL for `/auth` API (ex - http://localhost:8000/users)

`REACT_APP_CLOUDINARY_URL` - The URL for cloudinary where images will be uploaded

## Future Roadmap

> 🛣️ The following are the features that I'll be working on in the future.

- [ ] Homepage
- [ ] Help
- [ ] Save Post
- [ ] Share Post
- [ ] Draft Post
- [ ] Form Validation
- [ ] Responsiveness
- [ ] Search
- [ ] OAuth 2.0
- [ ] Blogs as posts
- [ ] Notifications

## Feedback

If you have any feedback, please reach out to me via mail [sudesh_das@outlook.com](mailto:sudesh_das@outlook.com)

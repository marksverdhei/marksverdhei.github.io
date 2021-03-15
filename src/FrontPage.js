import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Feed from './Feed'
import Sidebar from './Sidebar'
import post1 from './posts/blog-post.1.md'
import BasePage from './BasePage'
import GlobalContext from './GlobalContext'

const mainFeaturedPost = {
    title: 'Welcome',
    description:"to my personal website",
    image: 'earth.jpg',
    imgText: 'main image description',
}

const mainCards = {
  main: {
    title: 'Blog',
    date: '',
    description:
      'The place where I share and discuss things I have recently learned',
    image: 'blog.png',
    imageText: 'Portrait',
    page: 'main'
  },
  about: {
      title: 'About me',
      date: '',
      description:
        'I am a Machine Learning enthusiast currently pursuing a masters degree at the University of Oslo ... ',
      image: 'portrait.jpg',
      imageText: 'Portrait',
      page: 'about'
  },
  portfolio: {
    title: 'Portfolio',
    date: '',
    description:
      'Click here to view all my published projects, code and more!',
    image: 'projects.jpg',
    imageText: 'Code',
    page: 'portfolio'
  }
}

const posts = [
    post1,
]

const sidebar = {
  title: 'Links',
  description:
    "This is a sidebar that I dont know if i'll ever use",
  archives: [
    { title: 'March 2020', url: '#' },
  ],
  social: [
    { name: 'GitHub', url:'https://github.com/marksverdhei', icon: GitHubIcon },
    { name: 'LinkedIn', url:'https://www.linkedin.com/in/markus-heiervang/', icon: LinkedInIcon },
  ],
}

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))


function selectContentComponent(page) {
  switch (page) {
    case "about":
      return (<Feed title="About" posts={[]} />)

    case "portfolio":
      return (<Feed title="Portfolio" posts={[]} />)

    default:
      return (<Feed title="Blog" posts={posts} />)
  }
}

export default function FrontPage() {
  const [selectedContent, selectContent] = React.useState("main")
  // const [featuredPosts, setFeaturedPosts] = React.useState([])
  const featuredPosts = Object.keys(mainCards)
                              .filter(e => e !== selectedContent)
                              .map(e => mainCards[e])

  const classes = useStyles()
  const contextValue = {
    selectedContent: selectContent,
    selectContent: selectContent
  }
  return (
    <BasePage>
      <GlobalContext.Provider value={contextValue}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {selectContentComponent(selectedContent)}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </GlobalContext.Provider>
    </BasePage>
  )
}

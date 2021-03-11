import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './posts/blog-post.1.md.js';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [];

const mainFeaturedPost = {
    title: 'Welcome',
    description:"to my personal website",
  // image: 'recent_project.jpg',
  imgText: 'main image description',
  // linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'About me',
    date: '',
    description:
      'I am a Machine Learning enthusiast currently pursuing a masters degree at the University of Oslo ... ',
    image: 'portrait.jpg',
    imageText: 'Image Text',
    url:'https://www.linkedin.com/in/markus-heiervang/'
  },
  {
    title: 'Portfolio',
    date: '',
    description:
      'Click here to view all my published projects',
    image: 'projects.jpg',
    imageText: 'Image Text',
    url: 'https://github.com/marksverdhei'
  },
];

const posts = [
    post1,
];

const sidebar = {
  title: 'Useless sidebar',
  description:
    "This is a sidebar that I dont know if i'll ever use",
  archives: [
    { title: 'March 2020', url: '#' },
  ],
  social: [
    { name: 'GitHub', url:'https://github.com/marksverdhei', icon: GitHubIcon },
    { name: 'LinkedIn', url:'https://www.linkedin.com/in/markus-heiervang/', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Markus Heiervang" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Blog" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="What should I put here?" description="I have no clue!" />
    </React.Fragment>
  );
}

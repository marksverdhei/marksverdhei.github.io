import React from 'react'
import PropTypes from 'prop-types'
import Markdown from './Markdown'
import FeaturedPost from './FeaturedPost'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardContent, CardMedia, CardHeader, Grid, Typography, Hidden } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 50,
  },
}))

export default function ProjectFeed(props) {
  const classes = useStyles()
  const { title } = props

  return (
    <Grid item xs={12} md={8}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              About me
            </Typography>
            <Typography>
              I am Machine Learning enthusiast currently pursuing a
              Master's Degree at the University of Oslo. I have a bachelors degree
              in Computer Science (also from UiO) which I completed over 2 years.
              This page is dedicated to publishing projects as well a place for me to share
              things I have recently learned!
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            image="portrait.jpg"
            title="Markus Heiervang"
          />
        </Hidden>
      </Card>
    </Grid>
  )
}

// ProjectFeed.propTypes = {
//   posts: PropTypes.array,
//   title: PropTypes.string,
// }

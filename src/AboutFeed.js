import React from 'react'
import PropTypes from 'prop-types'
import Markdown from './Markdown'
import FeaturedPost from './FeaturedPost'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardContent, CardMedia, CardHeader, Grid, Typography } from '@material-ui/core'

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
    <>
    <Grid item xs={3} md={8}>
      <Card>
        <CardHeader
          title="About me"
        />
        <CardActionArea>
          <CardMedia style={{
            // height: 100,
            width: 260
            // paddingTop: '50%',
          }}
            image="portrait.jpg"
            title="Markus Heiervang"
          />
          <CardContent>
            <Typography>
              I am Machine Learning enthusiast currently pursuing a
              Master's Degree at the University of Oslo. I have a bachelors degree
              in Computer Science (also from UiO) which I completed over 2 years.
              This page is dedicated to publishing projects as well a place for me to share
              things I have recently learned!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </>
  )
}

// ProjectFeed.propTypes = {
//   posts: PropTypes.array,
//   title: PropTypes.string,
// }

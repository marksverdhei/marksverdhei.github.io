import React from 'react'
import PropTypes from 'prop-types'
import Markdown from './Markdown'
import FeaturedPost from './FeaturedPost'
import projectData from './data/projectData'


import { makeStyles } from '@material-ui/core/styles'


// import { DiRust } from 'react-icons/di'
// import { SiWebassembly } from 'react-icons/si'


import {
  Card, CardActionArea, CardActions, CardContent, CardMedia,
  Divider, Grid, Hidden, Typography, List, ListItem
} from '@material-ui/core'


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
    width: 160,
  },
}))

export default function ProjectFeed(props) {
  const classes = useStyles()
  const { title } = props

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        Portfolio
      </Typography>
      <Divider />
      <List>
      {
        projectData.map(p => (
          <ListItem>
            <CardActionArea component="a" href={p.link} disabled={p.disabled}>
              <Card className={classes.card} style={
                p.disabled ? {
                  color: "grey"
                } : null
              }>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {p.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {p.subtext}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    {p.description}
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image={p.img} title={"post.imageTitle"} />
                </Hidden>
              </Card>
            </CardActionArea>
          </ListItem>
        ))
      }
      </List>
    </Grid>
  )
}

// ProjectFeed.propTypes = {
//   posts: PropTypes.array,
//   title: PropTypes.string,
// }

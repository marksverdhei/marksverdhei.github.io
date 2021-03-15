import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import BasePage from './BasePage.js'
import Typography from '@material-ui/core/Typography';


export default function AboutPage() {
  return (
    <BasePage>
      <Typography>
        Currently pursuing an MS in Machine Learning and Natural Language Processing @ the University of Oslo.
        Last spring, I completed my Bachelor in Computer Science. Though incredibly challenging, completing the degree over the course of 2 years was also a lot of fun. Next to studies i've also taught the courses "Search Technology" and "Introduction to Object-oriented programming"
        Aspiring to become a data scientist, MLE, researcher or something along those lines
        Academic interests:
        Deep Learning, Question Answering systems, Summarization, Applied Machine Learning, Interdisciplinary Data Science, ML interpretability, High Performance Computing
      </Typography>
    </BasePage>
  )
}

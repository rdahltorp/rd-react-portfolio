import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TechBlogImg from '../../assets/images/projectImgs/techblog-screenshot.png'
import NoteTakerImg from '../../assets/images/projectImgs/note-taker-project-screenshot.png'
import EmpTrackImg from '../../assets/images/projectImgs/employee-tracker-screenshot.png'
import WorkSchedImg from '../../assets/images/projectImgs/day-scheduler-screenshot.png'
import VeggieBookImg from '../../assets/images/projectImgs/veggiebook-screenshot.png'
import NPSImg from '../../assets/images/projectImgs/parksearch-screenshot.png'
import mud from '../../assets/images/projectImgs/multi-user-dungeon.png'
import { width } from '@mui/system';
import { Grid } from '@mui/material';

const projects =[
    {
        name: 'Multi-User-Dungeon',
        langs: 'JavaScript, React, CSS, Express, GraphQL',
        repoLink: 'https://github.com/joshdelmonte/Multi-User-Dungeon',
        liveApp: 'https://darkerforest.herokuapp.com/',
        image: mud,
        title: 'Multi-User-Dungeon',
    },
    {
        name: 'Tech Blog',
        langs: 'JavaScript, Handlebars, Bootstrap, Express, MySQL',
        repoLink: 'https://github.com/rdahltorp/tech-blog',
        liveApp: 'https://fast-woodland-06373.herokuapp.com/',
        image: TechBlogImg,
        title: 'Tech Blog',
    },
    {
        name: 'Note Taker',
        langs: 'JavaScript, Express, Node',
        repoLink: 'https://github.com/rdahltorp/note-taker-app',
        liveApp: 'https://protected-journey-05055.herokuapp.com/',
        image: NoteTakerImg,
        title: 'Note Taker',
    },
    {
        name: 'Employee Tracker (CLI App)',
        langs: 'JavaScript, MySQL, Node',
        repoLink: 'https://github.com/rdahltorp/employee-tracker',
        image: EmpTrackImg,
        title: 'Employee Tracker',
    },
    {
        name: 'Work Day Scheduler',
        langs: 'JavaScript',
        repoLink: 'https://github.com/rdahltorp/work-day-scheduler',
        liveApp: 'https://rdahltorp.github.io/work-day-scheduler/',
        image: WorkSchedImg,
        title: 'Work Day Scheduler',
    },
    {
        name: 'VeggieBook',
        langs: 'JavaScript, Express, Bootstrap, Handlebars, Node, MySQL',
        repoLink: 'https://github.com/bornoflightning/veggiebook',
        liveApp: 'https://hidden-lake-21615.herokuapp.com/',
        image: VeggieBookImg,
        title: 'VeggieBook',
    },
    {
        name: 'National Park Search',
        langs: 'JavaScript, Materialize',
        repoLink: 'https://github.com/dcavinder/park_search',
        liveApp: 'https://dcavinder.github.io/park_search/',
        image: NPSImg,
        title: "National Parks Search",
    },
]

// ------------------------Map template based on array above----------------------------

export default function Portfolio() {
  return (
     <div className='mainContainer'>
         <h1>Previous Work</h1>
         <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
        {projects.map((project) => (
            <Grid item xs={12} md={5} className="projectCentering">
                <Card sx={{ width: '40vh', margin: '10px'}}>
                    <CardMedia 
                        key={project.name}
                        sx={{ 
                            height: 140, 
                        }}
                        image={project.image}
                        title={project.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Languages Used: {project.langs}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={project.repoLink} target="_blank" rel="noreferrer">Repo</Button>
                        {project.liveApp ? (
                            <Button size="small" href={project.liveApp} target="_blank" rel="noreferrer">Live App</Button>
                        )
                        : null
                        }
                    </CardActions>
                </Card>
            </Grid>
        ))}
        </Grid>
    </div>
    );
}


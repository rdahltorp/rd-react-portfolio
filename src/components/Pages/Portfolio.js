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
import { width } from '@mui/system';
import { Grid } from '@mui/material';

const projects =[
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
        repoLink: 'https://github.com/rdahltorp/work-day-scheduler',
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
        liveApp: 'https://fast-woodland-06373.herokuapp.com/',
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
                        <Button size="small" href={project.liveApp} target="_blank" rel="noreferrer">Live App</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
        </Grid>
    </div>
    );
}


// ------------------------TEST CARD TEMPLATE----------------------------

// export default function MediaCard() {
//   return (
//     <div className='mainContainer'>
//         <h1>Previous Work</h1>
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 sx={{ height: 140 }}
//                 image={projects[0].image}
//                 title={projects[0].title}
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {projects[0].name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Languages Used: {projects[0].langs}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small" href={projects[0].repoLink} target="_blank" rel="noreferrer">Repo</Button>
//                 <Button size="small" href={projects[0].liveApp} target="_blank" rel="noreferrer">Live App</Button>
//             </CardActions>
//         </Card>
//     </div>
//   );
// }

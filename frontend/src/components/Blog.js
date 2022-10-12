import React from 'react'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import '../App.css';

const Blog = ({title,description,imageURL,userName}) => {
  return (
    <div>
        {" "}
        <Card sx={{
                maxWidth: 345, 
                margin: 'auto', 
                marginTop: 2, 
                padding: 2, 
                boxShadow: "5px 5px 10px #ccc", 
                ":hover":{
                    boxShadow: "20px 20px 40px #ccc", 
                }, 
            }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        {userName}
                    </Avatar>
                }
                title={title}
            />
            <CardMedia
            component="img"
            height="194"
            image={imageURL}
            alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default Blog
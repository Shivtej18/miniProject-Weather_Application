import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const Init_Url = "https://media.istockphoto.com/id/2176083692/photo/hurricane-helene-2024-cloud-map-gulf-of-mexico-3d-render-color.jpg?s=1024x1024&w=is&k=20&c=h7VrlIY_77PwGeRKpYeGztKsn8EofrC-sfwSf8V-3LM="
    
    return (
        <div className="InfoBox">
            <h1> WeatherInfo : {info.weather} </h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={Init_Url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        {/* <p>Temperature: {info.temp} kelvin</p>
                        <p>Humidity: {info.humidity} kelvin</p>
                        <p>Min temperature: {info.tempmin}</p>
                        <p>Max temp: {info.tempmax} kelvin</p> */}

                        <p>Temperature: {info?.temp ?? '-'} °C</p>
                        <p>Humidity: {info?.humidity ?? '-'} %</p>
                        <p>Min temperature: {info?.tempmin ?? '-'} °C</p>
                        <p>Max temp: {info?.tempmax ?? '-'} °C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function Weather() {
  //UseStates do Projeto
  const [temperatura, setTemperatura] = useState(0);
  const [verify, setVerify] = useState("");
  const [open, setOpen] = useState(false);
  const [umi, setUmi] = useState("");
  const [wind, setWind] = useState("");

  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    navigator.geolocation.getCurrentPosition((pos) => {
        let latitude = pos.coords.latitude;
        let longitude = pos.coords.longitude;
        const ApiKey = "4d032c8629c287148ff30a60e7396f3b";
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${ApiKey}`;
        getWeather(URL);
    });
  }
  function getWeather(url) {
      let temp;
      let humidity;
      let wind;
      fetch(url).then((data) => {
          return data.json();
      }).then((data) => {
          temp = data.main.temp.toFixed(0);
          humidity = data.main.humidity.toFixed(0);
          wind = data.wind.speed.toFixed(1);
          setUmi(humidity);
          setTemperatura(temp);
          setWind(wind);
          verifyFrost(temp);
      }).catch((err) => {
          return <p>erro ao verificar Temperatura, Tente Novamente</p>
      });

  }
  function verifyFrost(temperature) {
      if (temperature <= 0) {
        setVerify("Risco de Geada Alto");
      }
      else if (temperature <= 5) {
          setVerify("Risco de Geada Médio");
      }
      else {
          setVerify("Risco de Geada Baixo");
      }
  }
  const openClose = () => {
    setOpen(!open);
  }

  return (
    <div>
      <Fab variant="extended" color="primary"  onClick={openClose} sx={{position: "fixed", bottom: 10, backgroundColor:"#66caf2"}}>
        <CloudQueueIcon/>
        <span>{temperatura}°C -</span>
        <span>- {verify}</span>
      </Fab>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={openClose}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Umidade</TableCell>
                    <TableCell>Velocidade do Vento</TableCell>
                  </TableRow>
                </TableHead>
                  <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                      <TableCell component="th" scope="row">
                        {umi}%
                      </TableCell>
                      <TableCell>
                        {wind}
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Backdrop>
    </div>
  );
}



export default Weather;

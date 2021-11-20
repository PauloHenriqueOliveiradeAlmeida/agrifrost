import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Weather from './components/Weather'
import Map from './components/Map'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
export default function Home() {
  const [value, setValue] = useState("Perfil")
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  }
  return (
    <div className={styles.container}>
      <Box>
        <AppBar sx={{backgroundColor: "#3bab59"}}>
          <Toolbar>
            <Link href="/">
              <a>
                <AccountCircleIcon sx={{marginRight: 3}} fontSize="large"/>
              </a>
            </Link>
            <Typography variant="h5" component="div" sx={{m: 3}}>AgriFrost</Typography><br/>
            <Typography variant="p" component="div">Previna-se contra geadas</Typography>
          </Toolbar>
        </AppBar>
        <Map/>
        <Grid container spacing={5} sx={{position: "fixed", bottom: 4, width: "100%", display: "flex", justifyContent: "center"}}>
          <Grid item>
            <BottomNavigation showLabels sx={{width: 200, borderRadius: 50, backgroundColor: "#00a8ff"}} onClick={openClose}>
              <BottomNavigationAction label="Dicas" icon={<EmojiObjectsIcon/>} sx={{color: "white"}}/>
            </BottomNavigation>
          </Grid>
        </Grid>
        <Weather className=".weather" />
      </Box>
      </div>
  )
}

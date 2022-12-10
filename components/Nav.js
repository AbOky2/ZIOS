import React from 'react'
import {Hamburger} from 'hamburger-react';
import { useState } from "react";
import {ImPaintFormat} from "react-icons/im";
import {ImPen} from "react-icons/im";
import { IconBase } from 'react-icons';
import  Link  from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ChevronRight from '@mui/icons-material/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const navigationLinks = [
    {name: "About", href: ""},
    {name: "Contact", href: ""},
    {name: 'Acceuil', href: ""},
];

const useStyles = makeStyles((theme) => ({

    link :{ marginRight : 20},
    avatar:{
        marginRight :"auto",
    }
}));


export default function Nav () {
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    // const theme = useTheme();
    //   const isMdView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position='sticky' color='default'>
        <Container maxWidth="md">
        <Toolbar disableGutters>
            <Avatar className={styles.avatar}>P</Avatar>
            <Hidden xsDown>
        {navigationLinks.map((item) =>(
            <Link 
            color="textPrimary" 
            variant="button" 
            underline="none "
            className={styles.link}
            href ={item.href}
            >
                {item.name}
            </Link>
        ))}
        </Hidden>
        <Hidden smUp>
            <IconButton>
                <MenuIcon onClick={()=> setOpen(true)} /> 
            </IconButton>

        </Hidden>
        </Toolbar>
        </Container>
        <SwipeableDrawer 
        open={open}
         anchor="right" 
        onOpen={()=>setOpen(true)} 
        onClose={() =>setOpen(false)}>
            <div>
                <IconButton>
                    <ChevronRight onClick={()=> setOpen(false)} />
                </IconButton>
            </div>
            <Divider />
            <List>
                {navigationLinks.map((item) =>(
                <ListItem>
                <Link 
                color="textPrimary" 
                variant="button" 
                underline="none "
                className={styles.link}
                href ={item.href}
                >
                    {item.name}
                </Link></ListItem>
            ))}
        </List>
        </SwipeableDrawer>
    </AppBar>
  );
  }
  


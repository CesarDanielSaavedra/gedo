"use client";

import { AppBar, Toolbar, Typography, IconButton, Box, Badge, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {
  return (
    <AppBar>
        <Toolbar>
            {/* Menú hamburguesa */}
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>

            {/* Logo GEDO */}
            <Typography variant="h6" component="div">
                GEDO
            </Typography>

            {/* Espaciador */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Icono de notificaciones */}
            <IconButton size="large" color="inherit">
                <Badge color="warning" variant="dot">
                    <NotificationsIcon />
                </Badge>
            </IconButton>

            {/* Avatar de usuario */}
            <IconButton size="large" color="inherit">
                <Avatar alt="Usuario" src="">
                    {/* DG */}
                </Avatar>
            </IconButton>
        </Toolbar>
    </AppBar>
    
  );
}
"use client";
import { AppBar, Toolbar, Typography, IconButton, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useMenu } from '@/hooks/useMenu';

export default function Header() {
    
    const userMenu = useMenu();

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
                <IconButton 
                    size="large" 
                    color="inherit" 
                    onClick={userMenu.handleOpen}
                >
                    <Avatar alt="Usuario" src="">
                        {/* DG 
                        asdasd */}
                    </Avatar>
                </IconButton>
                
                {/* Menú desplegable de usuario */}
                <Menu
                    anchorEl={userMenu.anchorEl}
                    open={userMenu.open}                    
                    onClose={userMenu.handleClose}
                    transitionDuration={200}
                >
                    <MenuItem onClick={userMenu.handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={userMenu.handleClose}>Cerrar sesión</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    
  );
}
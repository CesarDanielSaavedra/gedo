import { useState } from 'react';

/**
 * Hook personalizado para manejar menús anclados (MUI Menu)
 * Devuelve: anchorEl, open, handleOpen, handleClose
 */
export function useMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, open, handleOpen, handleClose };
}

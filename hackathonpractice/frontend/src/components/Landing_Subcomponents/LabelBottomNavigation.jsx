import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="New Upload"
        value="Upload"
        color='secondary'
        icon={<AspectRatioIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        color='secondary'
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Shopping List"
        value="List"
        color='secondary'
        icon={<ArticleIcon />}
      />
      <BottomNavigationAction
      label="Export to PDF" 
      value="PDF"
      color='secondary'
      icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
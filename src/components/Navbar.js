// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Badge,
//   InputBase,
//   Box,
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   ShoppingCart as ShoppingCartIcon,
//   Search as SearchIcon,
// } from '@mui/icons-material';
// import { styled, alpha } from '@mui/material/styles';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// const Navbar = ({ filter, setFilter, cartCount, setView }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleFilterChange = (e) => {
//     setFilter({ ...filter, [e.target.name]: e.target.value });
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//           onClick={() => setView('home')}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Property Rental Platform
//         </Typography>
//         <Search>
//           <SearchIconWrapper>
//             <SearchIcon />
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search by City"
//             inputProps={{ 'aria-label': 'search' }}
//             name="city"
//             value={filter.city}
//             onChange={handleFilterChange}
//           />
//         </Search>
//         <Search>
//           <StyledInputBase
//             placeholder="Max Price"
//             inputProps={{ 'aria-label': 'price' }}
//             name="priceRange"
//             value={filter.priceRange}
//             onChange={handleFilterChange}
//           />
//         </Search>
//         <IconButton
//           color="inherit"
//           onClick={() => setView('cart')}
//         >
//           <Badge badgeContent={cartCount} color="red">
//             <ShoppingCartIcon />
//           </Badge>
//         </IconButton>
//         <div>
//           <IconButton
//             color="inherit"
//             onClick={handleMenu}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={() => setView('home')}>Home</MenuItem>
//             <MenuItem onClick={() => setView('cart')}>Cart</MenuItem>
//             <MenuItem onClick={() => setView('checkout')}>Checkout</MenuItem>
//           </Menu>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;



import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  InputBase,
  Box,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = ({ filter, setFilter, cartCount, setView }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setView('home')}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1,color:"white"}}>
          Property Rental Platform
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by City"
            inputProps={{ 'aria-label': 'search' }}
            name="city"
            value={filter.city}
            onChange={handleFilterChange}
          />
        </Search>
        <Search>
          {/* <StyledInputBase
            placeholder="Min Price"
            inputProps={{ 'aria-label': 'minPrice' }}
            name="minPrice"
            value={filter.minPrice}
            onChange={handleFilterChange}
          /> */}
          <StyledInputBase
            placeholder="Max Price"
            inputProps={{ 'aria-label': 'maxPrice' }}
            name="maxPrice"
            value={filter.maxPrice}
            onChange={handleFilterChange}
          />
        </Search>
        <IconButton
          color="inherit"
          onClick={() => setView('cart')}
        >
          <Badge badgeContent={cartCount} color="red">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <div>
          <IconButton
            color="inherit"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => setView('home')}>Home</MenuItem>
            <MenuItem onClick={() => setView('cart')}>Cart</MenuItem>
            <MenuItem onClick={() => setView('checkout')}>Checkout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

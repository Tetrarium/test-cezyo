import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Search = styled('div')(() => ({
  position: 'relative',
  height: 50,
  border: '1px solid black',
  borderRadius: 25,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '94%',
  width: 94,
  position: 'absolute',
  right: 3,
  top: 2,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F0F4FB',
  borderRadius: 21,
  color: '#727280',
  zIndex: theme.zIndex.appBar
}));

const StyledInputBase = styled(InputBase)(() => ({
  height: '100%',
  fontSize: '1.6em',
  paddingLeft: 20,
  paddingRight: 100,
}));


export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar sx={{
          display: "flex",
          alignItems: "bottom",
          border: "1px solid black",
          width: '100%',
          gap: 4,
          py: 2,
        }}>
          <Typography variant="h3" sx={{
            fontSize: '3.7rem',
            fontWeight: 700,
            lineHeight: 1,
          }}>React</Typography>
          <Box display={"flex"} sx={{
            alignItems: "center",
          }}>
            <LocationOnOutlinedIcon fontSize="medium" sx={{
              width: '20px',
              height: '20px'
            }} />
            <Typography variant="body2" sx={{ textWrap: 'nowrap' }}>
              Александровск-Са...
            </Typography>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon fontSize="large" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск бренда, товара, категории..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

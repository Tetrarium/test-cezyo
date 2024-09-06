import { theme } from "@/main";
import FacebookIcon from "@/shared/icons/FacebookIcon";
import InstagramIcon from "@/shared/icons/InstagramIcon";
import VKIcon from "@/shared/icons/VKIcon";
import styled from "@emotion/styled";
import { Box, Button, IconButton, Link, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";

import FooterItem from "./footerItem";

const copyrightSx: SxProps<Theme> = {
  color: "#8D8D8E",
  textDecoration: 'none',
};

const Root = styled('div')<{ theme: Theme; }>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  display: "flex",

  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
  }
}));

export default function Footer() {
  return (
    <Box component={'footer'} sx={{
      backgroundColor: "#F8F8F8",
      py: '35px',
      px: '20px',
    }}>
      <Root theme={theme}>
        <Typography variant="h3" sx={{ flexGrow: 1, fontWeight: 700, fontSize: "4.1rem" }}>React</Typography>
        <Box sx={{
          display: "flex", gap: 2,
        }}>
          <FooterItem title="Присоединяйтесь к нам">
            <Box>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <VKIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Box>
          </FooterItem>
          <FooterItem title="Устанавливайте приложение">
            <>
              <Button sx={{
                p: 0,
              }}>
                <img src="./GooglePlay.png" alt="Google Play" />
              </Button>
              <Button>
                <img src="./AppStore.png" alt="App Store" />
              </Button>
            </>
          </FooterItem>
        </Box>
      </Root>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <Typography variant="h6" component={'span'} sx={copyrightSx}>
          © Sionic
        </Typography>
        <Typography variant="h6" component={Link} href="#" sx={copyrightSx}>
          Правовая информация
        </Typography>
        <Typography variant="h6" component={Link} href="#" sx={copyrightSx}>
          Политика конфиденциальности
        </Typography>
      </Box>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Brand Partnerships Dashboard',
    description:
      'Upon logging in, users are greeted with a user-friendly dashboard that displays all ongoing and potential brand partnerships. Each collaboration is neatly organized, providing details such as brand name, campaign objectives, deliverables, and deadlines.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Proposal Management:',
    description:
      "CollabGram simplifies the process of sending and receiving collaboration proposals. Users can create customized proposals tailored to each brand's requirements and easily send them through the platform. Brands can then review proposals, provide feedback, and accept or negotiate terms directly within CollabGram.",
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Content Calendar:',
    description:
      "Never miss a deadline again with CollabGram's integrated content calendar. Users can view all upcoming collaboration deadlines at a glance, ensuring timely delivery of sponsored content. The calendar can be synced with users' personal calendars for added convenience.",
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Performance Analytics: ',
    description:
      "Track the success of your collaborations with comprehensive performance analytics. CollabGram provides insights into key metrics such as engagement rates, reach, and conversions for each sponsored post, allowing users to demonstrate ROI to brand partners effectively.",
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Brand Directory:',
    description:
    "Discover new collaboration opportunities with CollabGram's extensive brand directory. Browse through a curated list of brands seeking Instagram influencers and content creators for partnerships, making it easier to expand your network and land lucrative deals.",
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Payment Management:',
    description:
      "Simplify the payment process with CollabGram's integrated payment management system. Users can track payment statuses, generate invoices, and receive payments directly through the platform, eliminating the hassle of manual invoicing and chasing overdue payments.",
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Communication Hub:',
    description: "Say goodbye to scattered email threads and DMs. CollabGram serves as a centralized communication hub for collaborating with brands. Users can exchange messages, share files, and discuss campaign details securely within the platform.",
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

const Features = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Product features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the types
              of features, add-ons, or the benefits of the features.
            </Typography>
          </div>
          <Grid container item rowSpacing={1} columnSpacing={1}  >
            {items.map(({ icon, title, description }, index) => (
              //this is my feature list
              <Grid item xs={12} md={6} key={index}>
                <Card
                  key={index}
                  variant="outlined"
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    p: 3,
                    height: 'fit-content',
                    width: '100%',
                    background: 'none',
                    backgroundColor:
                      selectedItemIndex === index ? 'action.selected' : undefined,
                    borderColor: (theme) => {
                      if (theme.palette.mode === 'light') {
                        return selectedItemIndex === index
                          ? 'primary.light'
                          : 'grey.200';
                      }
                      return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      textAlign: 'left',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: { md: 'center' },
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        color: (theme) => {
                          if (theme.palette.mode === 'light') {
                            return selectedItemIndex === index
                              ? 'primary.main'
                              : 'grey.300';
                          }
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.700';
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ textTransform: 'none' }}>
                      <Typography
                        color="text.primary"
                        variant="body2"
                        fontWeight="bold"
                      >
                        {title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ my: 0.5 }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Features;
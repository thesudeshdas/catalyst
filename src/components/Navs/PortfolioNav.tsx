import { Button, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

export type IPortfolioNavItem = { text: string; matcher: string; url: string };

export type IPortfolioNav = {
  items: IPortfolioNavItem[];
};

export default function PortfolioNav({ userId }) {
  const location = useLocation();

  const portfolioNav: IPortfolioNav = {
    items: [
      {
        text: 'Portfolio',
        matcher: `/${userId}/portfolio`,
        url: `/${userId}/portfolio`,
      },
      {
        text: 'Work',
        matcher: `/${userId}/work`,
        url: `/${userId}/work`,
      },
      // * - hidden for now
      // {
      //   text: 'Blogs',
      //   matcher: '/${userId}/blogs',
      //   url: `/${userId}/blogs`,
      // },
      // {
      //   text: 'Experience',
      //   matcher: '/${userId}/experience',
      //   url: `/${userId}/experience`,
      // },
      // {
      //   text: 'About',
      //   matcher: '/${userId}/about',
      //   url: `/${userId}/about`,
      // },
    ],
  };

  return (
    <Flex gap={12}>
      {portfolioNav.items.map((item) => {
        return location.pathname === item.matcher ? (
          <Stack key={item.text}>
            <Link to={item.url}>
              <Button variant='ghost'>
                <Heading size='md' fontWeight='600' color='black'>
                  {item.text}
                </Heading>
              </Button>
            </Link>

            <Divider height='4px' bg='black' opacity={1} borderRadius='md' />
          </Stack>
        ) : (
          <Link key={item.text} to={item.url}>
            <Button variant='ghost'>
              <Heading size='md' fontWeight='600' color='gray'>
                {item.text}
              </Heading>
            </Button>
          </Link>
        );
      })}
    </Flex>
  );
}

import { ReactNode } from 'react';
import { Box, Flex, Avatar, Link, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useColorMode, Center } from '@chakra-ui/react';
import { MoonIcon, SunIcon, AddIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NextLink href={'/'} passHref>
            <Link mr={2}>Solidity Guild</Link>
          </NextLink>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                {/* <Link as={NextLink} href="/blog">
                  Blog
                </Link> */}
                <NextLink href="https://docs.google.com/forms/d/e/1FAIpQLScR27DuDC_fPAwZXWFDKpZ8RUN_vBJnzM1zku0F1gKgen-hJw/viewform?usp=sf_link" passHref>
                  <Link>Contact</Link>
                </NextLink>
              </Menu>
              {/* <Button onClick={toggleColorMode} size={'sm'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

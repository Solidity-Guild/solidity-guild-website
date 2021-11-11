import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@fontsource/syne/variable.css';
import { getAllPosts } from '../lib/api';
import Layout from '../components/layout';
import Posts from '../components/posts';

import { Container, Heading, Button, Text, Link, SimpleGrid, Grid, Box, Image, HStack } from '@chakra-ui/react';
import { NftIcon, TokensIcon, StakingIcon, MarketplaceIcon, DexIcon, VestingIcon } from '../components/contractIcons';
import { WritingIcon, AuditingIcon, PlanningIcon, FindingIcon, BuildingIcon, TreasuriesIcon } from '../components/helpIcons';

const Home = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  // console.log(allPosts);

  const ContractTypes = ({ children, name }) => {
    return (
      <Box>
        <Box bg="#FAE9D1" h="200px" borderRadius="130px" display="flex" justifyContent="center" alignItems="center" mb="2">
          {children}
        </Box>
        <Text textAlign="center">{name}</Text>
      </Box>
    );
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Solidity Guild</title>
          <meta name="description" content="Collective of web3 crypto developers" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container maxW="1160px" w="100%" pb="16">
          <Grid pt="16" pb="24" templateColumns="repeat(2, 0.5fr)" gap={6}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Heading size="2xl" as="h1" fontWeight="black" pb="4">
                Solidity Guild
              </Heading>
              <Heading size="lg" as="h2" fontWeight="bold" pb="4">
                Collective of web3 crypto developers
              </Heading>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScR27DuDC_fPAwZXWFDKpZ8RUN_vBJnzM1zku0F1gKgen-hJw/viewform?usp=sf_link" target="_blank" rel="noreferrer">
                <Button size="lg" borderRadius="full" bg="whiteAlpha.900" color="black" textTransform="uppercase" fontWeight="black" mb="2">
                  Reach Out
                </Button>
              </Link>
            </Box>
            <Box>
              <Image src="/images/stab.png" alt="Hero Slaying Dragon" />
            </Box>
          </Grid>

          <Box>
            <Heading size="2xl" as="h3" fontWeight="black" pb="16">
              Writing Contracts for
            </Heading>
            <SimpleGrid columns={[2, 3, 6]} spacing={'40px'}>
              <ContractTypes name="NFTs">
                <NftIcon h="100px" />
              </ContractTypes>
              <ContractTypes name="Tokens">
                <TokensIcon h="60px" />
              </ContractTypes>
              <ContractTypes name="Staking and LP rewards">
                <StakingIcon h="70px" />
              </ContractTypes>
              <ContractTypes name="NFT Marketplace">
                <MarketplaceIcon h="70px" />
              </ContractTypes>
              <ContractTypes name="DEXs">
                <DexIcon h="70px" />
              </ContractTypes>
              <ContractTypes name="Token Vesting">
                <VestingIcon h="70px" />
              </ContractTypes>
            </SimpleGrid>
          </Box>
        </Container>

        {/* <Container maxW="1160px" w="100%" pb="16">
          <Heading size="2xl" as="h3" fontWeight="black" pb="16">
            Guild Blog Posts
          </Heading>
          {allPosts.length > 0 && <Posts posts={allPosts} />}
        </Container> */}

        <Box pt="16" pb="16" bg="whiteAlpha.900">
          <Container maxW="1160px" w="100%">
            <Heading size="2xl" as="h3" fontWeight="black" pb="16" color="black">
              Member Projects
            </Heading>
            <SimpleGrid columns={[2, 3, 4]} spacing={'20px'}>
              <Link href="https://www.creatorcabins.com/" isExternal color="black">
                Creator Cabins
              </Link>
              <Link href="https://cryptoraiders.xyz/" isExternal color="black">
                Crypto Raiders
              </Link>
              <Link href="https://mannys.game/" isExternal color="black">
                Mannys Game
              </Link>
              <Link href="https://eternal.plus/" isExternal color="black">
                Eternal
              </Link>
              <Link href="https://learn.nateliason.com/p/defi-orientation" isExternal color="black">
                DeFi Orientation
              </Link>
              <Link href="https://www.blockheads.family/" isExternal color="black">
                Blockheads Family
              </Link>
              <Link href="https://opensea.io/collection/regal-raptor-rescue-club" isExternal color="black">
                Regal Raptor Rescue Club
              </Link>
              <Link href=" https://swirlandmint.com/" isExternal color="black">
                Swirl & Mint
              </Link>
            </SimpleGrid>
          </Container>
        </Box>

        <Container maxW="1160px" w="100%" pt="16" pb="16">
          <Heading size="2xl" as="h3" fontWeight="black" mb="16">
            We Help with
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={'40px'}>
            <HStack mb="8">
              <WritingIcon h="50" w="50" mr="4" />
              <Text fontSize="3xl">Writing Smart Contracts</Text>
            </HStack>
            <HStack mb="8">
              <AuditingIcon h="50" w="50" mr="4" />
              <Text fontSize="3xl">Auditing Contracts</Text>
            </HStack>
            <HStack mb="8">
              <PlanningIcon h="50" w="50" mr="4" />
              <Text fontSize="3xl">Planning Tokenomics</Text>
            </HStack>
            <HStack mb="8">
              <FindingIcon h="50" w="50" mr="4" />
              <Text fontSize="3xl">Finding NFT Artists</Text>
            </HStack>
            <HStack mb="8">
              <BuildingIcon h="50" w="50" mr="4" />
              <Text fontSize="3xl">Building Sites</Text>
            </HStack>
            <HStack mb="8">
              <TreasuriesIcon h="50" w="50" mr="4" />
              <Text fontSize="3xl">Allocating Treasuries</Text>
            </HStack>
          </SimpleGrid>
        </Container>

        <Box pt="16" pb="16" bg="whiteAlpha.900">
          <Container maxW="1160px" w="100%">
            <Heading size="2xl" as="h3" fontWeight="black" pb="16" color="black">
              Active Members
            </Heading>
            <SimpleGrid columns={[2, 3, 4]} spacing={'40px'}>
              <Link href="https://twitter.com/0xZakk" isExternal color="black">
                @0xZakk
              </Link>
              <Link href="https://twitter.com/nateliason" isExternal color="black">
                @NatEliason
              </Link>
              <Link href="https://twitter.com/msfeldstein" isExternal color="black">
                @msfeldstein
              </Link>
              <Link href="https://twitter.com/BrennerSpear" isExternal color="black">
                @BrennerSpear
              </Link>
              <Link href="https://twitter.com/adilmajid" isExternal color="black">
                @AdilMajid
              </Link>
              <Link href="https://twitter.com/jongold" isExternal color="black">
                @jongold
              </Link>
              <Link href="https://twitter.com/mitchellbwright" isExternal color="black">
                @mitchellbwright
              </Link>
              <Link href="https://twitter.com/mannynotfound" isExternal color="black">
                @mannynotfound
              </Link>
              <Link href="https://twitter.com/zachobront" isExternal color="black">
                @ZachObront
              </Link>
              <Link href="https://twitter.com/0xsfj" isExternal color="black">
                @0xsfj
              </Link>
              <Link href="https://twitter.com/oightytag" isExternal color="black">
                @oightytag
              </Link>
              <Link href="https://twitter.com/DugDaniels" isExternal color="black">
                @DugDaniels
              </Link>
              <Link href="https://twitter.com/blokboyJm" isExternal color="black">
                @blokboyJm
              </Link>
              <Link href="https://twitter.com/w1nt3r_eth" isExternal color="black">
                @w1nt3r
              </Link>
            </SimpleGrid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags']);

  return {
    props: { allPosts },
  };
}

export default Home;

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
// import { getPostBySlug, getAllPosts } from '../lib/api';
import Head from 'next/head';
import markdownToHtml from '../lib/markdownToHtml';
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layout';
import DateFormatter from '../components/date-formatter';
// import Posts from '../components/posts';

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Solidity Guild Blog</title>
        {/* <meta property="og:image" content={} /> */}
      </Head>
      {/* <Heading fontWeight="black">Solidity Guild Blog</Heading> */}
      <Box columns={[1, 2]} spacing={10} maxW="1200px" pt="20" pb="20">
        <Container maxW="1160px" w="100%" pb="16">
          <Heading size="2xl" as="h3" fontWeight="black" pb="16">
            No Posts Yet
          </Heading>
        </Container>
        {/* <Posts /> */}
      </Box>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags']);

//   return {
//     props: { allPosts },
//   };
// }

export default Blog;

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Image, Grid, useMediaQuery } from '@chakra-ui/react';
import Layout from '../../components/layout';
import DateFormatter from '../../components/date-formatter';
import { BlogTags, BlogAuthor } from '../../components/posts';

export default function Post({ post, morePosts, preview }) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(post);

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <Heading>Loading…</Heading>
      ) : (
        <>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>

          <Flex flexDirection={'column'} p="10" alignItems={'center'}>
            <Heading fontWeight="black">{post.title}</Heading>
            <Text>
              <DateFormatter dateString={post.date} />
            </Text>
            <Grid templateColumns={isLargerThan800 ? '1fr 350px' : ''} autoColumns gap={10} maxW="1200px" pt="10" pb="20">
              <article>
                <Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
              </article>
              <Box>
                <Image borderRadius="lg" src={post.coverImage} alt={post.title} objectFit="contain" mb="10" />
                <BlogTags tags={post.tags} />
                <BlogAuthor name={post.author.name} date={post.date} image={post.author.picture} />
              </Box>
            </Grid>
          </Flex>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage', 'tags']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

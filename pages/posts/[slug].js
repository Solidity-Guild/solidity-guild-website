import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import Layout from '../../components/layout';
import DateFormatter from '../../components/date-formatter';

export default function Post({ post, morePosts, preview }) {
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

          <Heading fontWeight="black">{post.title}</Heading>
          <Text>
            <DateFormatter dateString={post.date} />
          </Text>
          <SimpleGrid columns={[1, 2]} spacing={10} maxW="1200px" pt="20" pb="20">
            <article>
              <Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
            </article>
            <Box>
              <Heading as="h4" size={'md'}>
                Author: {post.author.name}
              </Heading>
            </Box>
          </SimpleGrid>
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

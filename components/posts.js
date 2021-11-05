import React from 'react';
import { Box, Heading, Link, Image, Text, Divider, HStack, Tag, Wrap, WrapItem, SpaceProps, useColorModeValue, Container, VStack, SimpleGrid } from '@chakra-ui/react';
import DateFormatter from '../components/date-formatter';
import NextLink from 'next/link';

export const BlogTags = (props) => {
  //   console.log(props);
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  //   console.log(props);

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center" key={props.id}>
      <Image borderRadius="full" boxSize="40px" src={props.image} alt={`Avatar of ${props.name}`} />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>
        <DateFormatter dateString={props.date} />
      </Text>
    </HStack>
  );
};

const Posts = ({ posts }) => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={'20px'} mb="20">
      {posts.map((post, key) => {
        // console.log(post);
        return (
          <Box key={key} display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: '3', sm: '0' }}>
            <NextLink href={`/posts/${post.slug}`} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }} mb={4}>
                <Image borderRadius="lg" src={post.coverImage} alt={post.title} objectFit="contain" />
              </Link>
            </NextLink>
            <BlogTags tags={post.tags} />
            <Heading marginTop="1">
              <NextLink href={`/posts/${post.slug}`} passHref>
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  {post.title}
                </Link>
              </NextLink>
            </Heading>
            <Text as="p" marginTop="2" fontSize="lg">
              {post.excerpt}
            </Text>
            <BlogAuthor name={post.author.name} date={post.date} image={post.author.picture} />
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default Posts;

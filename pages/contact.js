import { Heading, Text, Container, FormLabel, Button, Input, FormErrorMessage, FormControl } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/layout';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Container pt={12} pb={12}>
        <Heading size="4xl" mb="8" textAlign={'center'}>
          Solidity Guild Project Proposal
        </Heading>
        <Text mb={8} textAlign={'center'}>
          We review project proposals on an on-going basis. If your project is a good fit for someone in our collective, then we'll reach out with next steps.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="name" mb={8}>
            <FormLabel htmlFor="name">What is your name?</FormLabel>
            <Input placeholder="Jane Doe" {...register('title', { required: true })} />
            {errors.title && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="twitter" mb={8}>
            <FormLabel htmlFor="twitter">What is your Twitter handle?</FormLabel>
            <Input placeholder="@funfinance" {...register('company', { required: true })} />
            {errors.company && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="project-name" mb={8}>
            <FormLabel htmlFor="project-name">What is your project called?</FormLabel>
            <Input placeholder="fun.finance" {...register('link', { required: true })} />
            {errors.company && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="description" mb={8}>
            <FormLabel htmlFor="description">How would you describe your project?</FormLabel>
            <Input placeholder="Tell us everything" {...register('link', { required: true })} />
            {errors.company && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="help" mb={8}>
            <FormLabel htmlFor="help">What kind of help are you looking for?</FormLabel>
            <Input placeholder="Finance Contract" {...register('link', { required: true })} />
            {errors.company && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="budget" mb={8}>
            <FormLabel htmlFor="budget">What is your budget (in DAI or Eth)?</FormLabel>
            <Input placeholder="5 ETH" {...register('link', { required: true })} />
            {errors.company && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="contact" mb={8}>
            <FormLabel htmlFor="contact">What is the best way to reach out?</FormLabel>
            <Input placeholder="Twitter" {...register('link', { required: true })} />
            {errors.company && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="referred" mb={8}>
            <FormLabel htmlFor="referred">If you were referred here by someone, what is their name and/or twitter handle?</FormLabel>
            <Input placeholder="@nateliason" {...register('link', { required: true })} />
            {errors.company && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <Button type="submit" size="lg" borderRadius="full" bg="whiteAlpha.900" color="black" textTransform="uppercase" fontWeight="black" mb="2">
            Submit Project Proposal
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;

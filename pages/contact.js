import { Heading, Text, Container, FormLabel, Button, Input, FormErrorMessage, FormControl } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/layout';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    console.log(`Data`);
    // console.log(values);
    // console.log(JSON.stringify(values));

    const dataJson = JSON.stringify(values);

    fetch('https://hooks.zapier.com/hooks/catch/11272006/bdh07n3/', {
      method: 'POST',
      body: dataJson,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });

    reset();
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
          <FormControl id="name" mb={8} isInvalid={errors.name}>
            <FormLabel htmlFor="name">What is your name?</FormLabel>
            <Input placeholder="Jane Doe" {...register('name', { required: true })} />
            {errors.name && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="twitter" mb={8} isInvalid={errors.twitter}>
            <FormLabel htmlFor="twitter">What is your Twitter handle?</FormLabel>
            <Input placeholder="@funfinance" {...register('twitter', { required: true })} />
            {errors.twitter && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="projectName" mb={8} isInvalid={errors.projectName}>
            <FormLabel htmlFor="projectName">What is your project called?</FormLabel>
            <Input placeholder="fun.finance" {...register('projectName', { required: true })} />
            {errors.projectName && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="description" mb={8} isInvalid={errors.description}>
            <FormLabel htmlFor="description">How would you describe your project?</FormLabel>
            <Input placeholder="Tell us everything" {...register('description', { required: true })} />
            {errors.description && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="help" mb={8} isInvalid={errors.help}>
            <FormLabel htmlFor="help">What kind of help are you looking for?</FormLabel>
            <Input placeholder="Finance Contract" {...register('help', { required: true })} />
            {errors.help && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="budget" mb={8} isInvalid={errors.budget}>
            <FormLabel htmlFor="budget">What is your budget (in DAI or Eth)?</FormLabel>
            <Input placeholder="5 ETH" {...register('budget', { required: true })} />
            {errors.budget && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="contact" mb={8} isInvalid={errors.contact}>
            <FormLabel htmlFor="contact">What is the best way to reach out?</FormLabel>
            <Input placeholder="Twitter" {...register('contact', { required: true })} />
            {errors.contact && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <FormControl id="referred" mb={8} isInvalid={errors.referred}>
            <FormLabel htmlFor="referred">If you were referred here by someone, what is their name and/or twitter handle?</FormLabel>
            <Input placeholder="@nateliason" {...register('referred', { required: true })} />
            {errors.referred && <FormErrorMessage>This field is required</FormErrorMessage>}
          </FormControl>

          <Button type="submit" isLoading={isSubmitting} size="lg" borderRadius="full" bg="whiteAlpha.900" color="black" textTransform="uppercase" fontWeight="black" mb="2">
            Submit Project
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;

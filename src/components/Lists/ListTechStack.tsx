import * as React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { techStackIcons } from '../../data/tech-stack/techStack.data';
import { IStack } from '../../types/auth.type';

export default function ListTechStack({ stack, ...props }) {
  const techStack = techStackIcons.filter(({ alt }) =>
    stack?.some(({ label }) => label == alt)
  );

  return (
    <Flex {...props}>
      {techStack.map(({ src, alt }) => (
        <Image key={alt} src={src} alt={alt} width='32px' height='32px' />
      ))}
    </Flex>
  );
}

import { Button } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export default function CTAButton({
  text,
  handler,
  variant,
  leftIcon,
  rightIcon,
  loading,
}: {
  text: string;
  handler?: React.MouseEventHandler;
  variant?: string;
  leftIcon?: ReactJSXElement;
  rightIcon?: ReactJSXElement;
  loading?: boolean;
}) {
  return (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      variant={variant}
      onClick={handler}
    >
      {text}
    </Button>
  );
}

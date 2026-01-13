import { Container, Label, Field } from './style';

export function Input({ label, ...props }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Field {...props} />
    </Container>
  )
}
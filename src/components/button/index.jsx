import { StyledButton } from "./style";

export function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}
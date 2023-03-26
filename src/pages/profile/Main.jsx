import { Container } from '@chakra-ui/layout'
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'

export default function Main() {
  return (
    <Container display={{ base: 'block', md: 'flow-root' }} maxW="container.xl">
      <Content />
    </Container>
  )
}

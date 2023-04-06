import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import { ConnectItems, ContainerBox } from './styles'

export default function Register() {
  const session = useSession()
  // async function handleRegister(data) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ContainerBox>
        <ConnectItems>
          <Text>Google Calendar</Text>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItems>

        <code>
          <Text>{JSON.stringify(session.data)}</Text>
        </code>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ContainerBox>
    </Container>
  )
}

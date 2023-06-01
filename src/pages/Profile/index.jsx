import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Avatar>
        <img src="https://github.com/Gabriel-Porto.png" alt="Foto do usuário" />

        <label htmlFor="avatar">
          <FiCamera />

          <input 
            id="avatar"
            type="file" 
          />
        </label>
      </Avatar>

      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <br />   
        <Input placeholder="Senha Atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}

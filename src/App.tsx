import H1 from "./components/text/H1"
import H2 from "./components/text/H2"
import H4 from "./components/text/H4"
import HeadingOfSection from "./components/text/HeadingOfSection"
import Subtitle from "./components/text/Subtitle"
import Text from "./components/text/Text"
import TextFooter from "./components/text/TextFooter"

function App() {
  return (
    <>
      <H1 >Hi, world!</H1>
      <H2 >Hi, world!</H2>
      <H4 >Hi, world!</H4>
      <Subtitle fontWeight="font-semibold">Lorem ipsum dolor  debitis ullam numquam nulla reprehenderit, quisquam suscipit minus ad sed.</Subtitle>
      <HeadingOfSection>Lorem</HeadingOfSection>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolor sunt voluptatum placeat sit hic a, mollitia magnam illo </Text>
      <TextFooter>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro est distinctio neque inventore itaque minus omnis, voluptates quod in harum iure ad, voluptate ea! Alias laudantium necessitatibus repellat ipsam earum.</TextFooter>
    </>
  )
}

export default App

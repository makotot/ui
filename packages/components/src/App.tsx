import { VStack } from "./lib"

function App() {
  return (
    <>
      <VStack spacing="sm" align="start">
        <div className="bg-azure-radiance-500">test</div>
        <div className="bg-azure-radiance-500">test</div>
        <div className="bg-azure-radiance-500">test</div>
        <span className="bg-azure-radiance-500">test</span>
      </VStack>
      <VStack spacing="sm" align="stretch">
        <div className="bg-azure-radiance-500">test</div>
        <div className="bg-azure-radiance-500">test</div>
        <div className="bg-azure-radiance-500">test</div>
        <span className="bg-azure-radiance-500">test</span>
      </VStack>
      <VStack spacing="sm" align='center'>
        <div className="bg-azure-radiance-500">test</div>
        <div className="bg-azure-radiance-500">test</div>
        <div className="bg-azure-radiance-500">test</div>
        <span className="bg-azure-radiance-500">test</span>
      </VStack>
    </>
  )
}

export default App

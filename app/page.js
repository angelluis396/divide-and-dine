import PanelLayout from "./components/PanelLayout"
import TipForm from './components/TipForm'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5  lg:p-24">
      <div className="title-box">
        <h1 id='title1' className="text-center"> Divide </h1>
        <h2 id='title2' className="text-center"> & </h2>
        <h1 id='title3' className="text-center"> Dine </h1>
        <br/>
      </div>
      <PanelLayout>
        <TipForm />
      </PanelLayout>
    </main>
  )
}
export default Home
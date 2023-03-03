import Navbar from '../components/home/Navbar'
import Header from '../components/home/Header'
import ContentLayout from '../components/layout/ContentLayout'
import MainLayout from '../components/layout/MainLayout'


export default function Home() {
  return (
    <div>
      <MainLayout>
        <Navbar />
        <Header />
      </MainLayout>
    </div>
  )
}

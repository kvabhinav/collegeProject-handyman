import MainLayout from '../../components/layout/MainLayout'
import ContentLayout from '../../components/layout/ContentLayout'
import Navbar from '../../components/home/Navbar'
import Form1 from '../../components/employee/Form1'

export default function RegistrationForm1() {
    return (
        <div>
           <MainLayout>
            <Navbar />
            <ContentLayout>
                <Form1 />
            </ContentLayout>
           </MainLayout> 
        </div>
    )
}
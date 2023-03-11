import MainLayout from '../../components/layout/MainLayout'
import ContentLayout from '../../components/layout/ContentLayout'
import Navbar from '../../components/home/Navbar'
import Form2 from '../../components/employee/Form2'

export default function RegistrationForm2() {
    return (
        <div>
           <MainLayout>
            <Navbar />
            <ContentLayout>
                <Form2 />
            </ContentLayout>
           </MainLayout> 
        </div>
    )
}
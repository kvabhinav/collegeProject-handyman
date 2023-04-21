import MainLayout from '../../components/layout/MainLayout'
import ContentLayout from '../../components/layout/ContentLayout'
import Form1 from '../../components/employee/Form1'

export default function RegistrationForm1() {
    return (
        <div>
           <MainLayout>
            <ContentLayout>
                <Form1 />
            </ContentLayout>
           </MainLayout> 
        </div>
    )
}
import MainLayout from '../../components/layout/MainLayout'
import ContentLayout from '../../components/layout/ContentLayout'
import Successfull from '../../components/Successfull'

export default function bookingSuccess() {
    return (
        <MainLayout>
            <ContentLayout>
                <Successfull></Successfull>
            </ContentLayout>
        </MainLayout>
    )
}
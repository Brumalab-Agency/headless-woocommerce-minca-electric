import { Footer } from '@/components/home/Footer'
import { HeroContext } from '@/components/reusable/HeroContext'
import { HeroVideoSingleProduct } from '@/components/reusable/HeroVideoSingleProduct'
import TestDriveComponent from '@/components/reusable/TestDriveComponent'
import { Testimonios } from '@/components/testimonio/Testimonios'


const TestDrive = () => {
  return (
    <>
        <HeroContext titulo="TEST" tituloNegrita="DRIVE" ocultar="hidden"/>
        <HeroVideoSingleProduct titulo="MINCA" tituloSecundarioNegrita="Test drive." clases="capitalize" urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/04/minca-electric-background.mp4"/>
        <TestDriveComponent/>
        <Testimonios />
        <Footer/>
    </>
  )
}

export default TestDrive
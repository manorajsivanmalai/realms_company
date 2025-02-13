import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Consultation1 from "@/components/sections/Consultation1"
import Project1 from "@/components/sections/Project1"
import Services1 from "@/components/sections/Services1"

import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home1() {

    return (
        <>
            <Layout>
                <Banner1 />
                <Services1 />
                <About1 />
                <Project1 />
                <Testimonial1 />
                <Consultation1 />
                
            </Layout>
        </>
    )
}
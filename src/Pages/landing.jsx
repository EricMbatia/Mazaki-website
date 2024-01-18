//This is the default page a user will be directed to upon clicking on the website link

import '../index.css'

//importing components
import TopPage from '../components/TopPage' 
import Header from '../components/header'
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <>
            <div>
                <TopPage />
                <Header />
                <div className="text-3xl underline font-bold">
                    Spicy good
                </div>
                <Footer />
            </div>
        </>
    )
}

export default LandingPage
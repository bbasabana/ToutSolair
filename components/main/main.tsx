import LeftContent from "./leftContent";
import RightContent from "./rightContent";

function MainPage(){
    return  <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
                <LeftContent/>
                <RightContent/>
            </section>
}
export default MainPage
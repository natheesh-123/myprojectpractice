
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";

const BNKJewelleryShop = () => {
    return (

        <div>

            {/* <h2>this is main dash board componennt</h2>
            <Outlet /> */}

            <div className="card border-primary">
                <div className="card-header border-primary">
                    <NavComp />
                </div>
                <div className="card-body border-primary">
                </div>
                <div className="card-footer border-primary">
                    <FooterComp />
                </div>


            </div>
        </div>
    )
}
export default BNKJewelleryShop;


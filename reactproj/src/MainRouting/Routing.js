import { createBrowserRouter } from "react-router-dom";
// import Counttask from "../task/Counttask";
// import ClassComp from "../components/ClassComp";
// import FuncComp from "../components/FuncComp";
// import ReactHooksComp from "../Hooks/ReactHooksComp";
// import UseStateHooksComp from "../Hooks/UseStateHooksComp";
// import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
// import PageNotFoundComp from "../Layout/PageNotFoundComp";
// import MainDashBoardComp from "../Layout/MainDashBoardComp";
import BNKJewelleryShop from "../Layout/BNKJewelleryShop";
import AboutComp from "../components/AboutComp";
import HomeComp from "../components/HomeComp";
import HeaderComp from "../Layout/HeaderComp";
// import MyFavColorComp from "../components/MyFavColorComp";
// import FormValComp from "../components/FormValComp";
// import ProductDashComp from "../CRUD/ProductDashComp";
// import ProductAddComp from "../CRUD/ProductAddComp";
// import ProductEditComp from "../CRUD/ProductEditComp";


const routing = createBrowserRouter([

    
        {path:"bkmjewellershop",element:<HeaderComp/>, children:[


                // { path: "productdashcomp", element: <ProductDashComp /> },
                // { path: "productaddcomp", element: <ProductAddComp /> },
                // { path: "producteditcomp/:id", element: <ProductEditComp /> },
    
                {path:"aboutcomp",element:<AboutComp/>},
                {path:"homecomp",element:<HomeComp/>}


    

          //wild card routing
            // { path: "*", element: <PageNotFoundComp /> }

        ]
    }
]);

export default routing;
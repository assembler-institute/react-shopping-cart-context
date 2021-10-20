import React from "react";
import InfoForm from "../../components/UserForm";

import withLayout from "../../hoc/withLayout";
import Cart from "../../components/Cart";
import UserForm from "../../components/UserForm";
import UserContext from "../../Contexts/UserContext";
function UserInfo(){

    return(
        <div className="row">
            
            <UserForm />
            
            <Cart className="col col-4" />
        </div>
    )
}

export default withLayout(UserInfo)
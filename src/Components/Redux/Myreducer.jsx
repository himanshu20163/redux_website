var intitaldata = {
    name:"himanshu",
    products:[],
    addtocart:[],
}
const myreducer = (storedata = intitaldata,action)=>{
    if(action.type  === "name"){
        return{
            name:action.myname,
        } 
    }
    else if(action.type === "products"){
        return {
            products:action.myproducts,  
        }
    }
    else if(action.type === "addtocart"){
        return {
            addtocart:action.mycards,  
        } 
    }
    return storedata;
}
export default myreducer;
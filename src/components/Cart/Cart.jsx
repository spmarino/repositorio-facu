import { useCartContext } from "../../contexts/CartContext";
import { useState } from "react";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    doc, 
    updateDoc, 
    query, 
    where, 
    documentId, 
    writeBatch, 
    getDocs 
} from "firebase/firestore";


const Cart = () => {

    const [id, setId] = useState("")
    const [dataForm, setDataForm] = useState({
        email: "",
        phone: "",
        name: ""
    })
    const { cartList, deleteList, priceTotal, deleteFromCart } = useCartContext()

    const buys = async (e) => {
        e.preventDefault()  
  
        let orden = {}          

        orden.buyer =  dataForm; 
        orden.total = priceTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.product.id;
            const names = cartItem.product.description;
            const prices = cartItem.product.price * cartItem.qty;
            const qtys = cartItem.qty;
            
            return {
                id, 
                names, 
                prices, 
                qtys
            }   
        });

        const db = getFirestore();
        const ordersCollection = collection (db, "orders")
        await addDoc( ordersCollection, orden)
        .then(resp => setId(resp.id)) 

        
        .catch(err => console.log(err))
        .finally(() => { 
                setDataForm({
                    email: "",
                    phone: "",
                    name: ""
                })
                deleteList()
            })    
   
    
 }

    const handleChange = (event) => {      
        setDataForm({ 
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }


    return <div>
            {id !== "" && `The order id is : ${id} ` }
            <br />
            {cartList.length !== 0 ?<>
                {cartList.map(produ => <div>
                   <ul>
                       <li>{produ.product.description}  </li>
                       <li>prices: {produ.product.price}</li>
                       <li>qtys: {produ.qty}</li>
                       <img style={{width:"80px", height:"auto"}}src={produ.product.image} alt="Bike" /></ul> 

                    <button onClick={() => deleteFromCart(produ.product.id)}>x</button>
                </div> ) }
            {`Total: ${priceTotal()}`}
            <br/>
                
                <form 
                    onSubmit={buys}                           
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        onChange={handleChange}
                        value={dataForm.name}
                    />
                    <br />
                    <input 
                        type="number" 
                        name="phone"
                        placeholder="tel" 
                        onChange={handleChange}
                        value={dataForm.phone}
                    />
                    <br/>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="email" 
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                    <input 
                        type="email" 
                        name="validateEmail"
                        placeholder="Repeat Email" 
                        onChange={handleChange}
                        //value={}
                    />
                    <br/>
                    <button>Generate order!</button>
                </form>
                <button onClick={deleteList} >Empty cart!</button>
            </> 
            :
            <> 
                <label>There is no product go buy now!</label>
                {console.log(cartList)}
                <br />
            </> 
        
            }
               
        </div>;
    };

export default Cart;
 
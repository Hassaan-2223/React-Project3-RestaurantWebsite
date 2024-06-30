import React,{useState,useEffect} from 'react'
import "./style.css"

const Todo = () => {
    // ---------------------- STATES -----------------------------
    const getLocalStorageData=()=>{
        const list = localStorage.getItem('todoList');
        if(list){
            return JSON.parse(list);
        }
        else{
            return [];
        }
    }

    const[inputData,setInputData] = useState("");
    // now add a input data to a new list so states
    const[items,setItems]=useState(getLocalStorageData());
    const[ind,setind] = useState("")
    const[tooglebtn,settooglebtn]=useState(false)

    // ----------------------- FUNSTIONS ------------------

    


    const additem = ()=>{
        if(!inputData){
            alert('plz fill input field')
        }
        else if(inputData && tooglebtn){
            setItems(items.map((curElm)=>{
                if(curElm.id === ind){
                    return {...curElm, name: inputData}
                }
                return curElm;
            }))
            setInputData("");
        }
        else{
            const idInputData= {
                id : new Date().getTime().toString(),
                name : inputData,
            };
            setItems([...items,idInputData])
            setInputData("");
        }
    }

    const deleteItem = (index)=>{
        const updatedItems = items.filter((curElm)=>{
            return curElm.id !== index;
        })
        setItems(updatedItems);
    }

    const editItem=(index)=>{
        // items.map((curElm)=>{
            // if(curElm.id===index){
            //     // return(
            //     //     settooglebtn(true),
            //     //     setInputData(curElm.name),
            //     //     setind(index)
            //     // ) 
                
            // }
            const item_editd =items.find((curElm)=>{
                return curElm.id === index
            })
            settooglebtn(true)
            setInputData(item_editd.name)
            setind(index)
        // })
    }

    const removeAll=()=>{
        setItems([]);
    }

    // ----------------------------- ADDING DATA TO LOCAL STORAGE --------------------
    useEffect(()=>{
        localStorage.setItem("todoList",JSON.stringify(items))
    },[items])

  return (
    <div className='main-div'>
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="" />
                <figcaption>Add your Notes here</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='✍ Add Items' className='form-control' value={inputData} onChange={(event)=>{setInputData(event.target.value)}}/>
                {tooglebtn ? <i className='far fa-edit add-btn' onClick={additem}></i>   : <i className='fa fa-plus add-btn' onClick={additem}></i>}
                
            </div>
            <div className="showItems">
                {items.map((curElm)=>{
                    return(
                        <div className="eachItem">
                        <h3>{curElm.name}</h3>
                        <div className="todo-btn">
                        <i className='far fa-edit add-btn' onClick={()=>editItem(curElm.id)}></i>
                        <i className='far fa-trash-alt add-btn' onClick={()=>deleteItem(curElm.id)}></i>
                    </div>
                </div>
                    )
                })}
                
            </div>
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text='Remove All' onClick={removeAll}><span>Check List</span></button>
            </div>
        </div>
      
    </div>
  )
}

export default Todo

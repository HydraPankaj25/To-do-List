import React, { useState } from 'react'

export const Addtodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit =(e)=>{
        //this is to prevent the reloading of the page
       e.preventDefault();
       if(!title || !desc){
        alert("Title And Description cannot be blank");
       }
       props.addtodo(title,desc);
       setTitle("");
       setDesc("");
    }

    return (
        <div className='container'>
            <h3 className='text-center'>Adding List</h3>
            <form className='my-3' onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ToDo Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Work" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1">ToDo Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="To Do Description"  value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-success my-4">Add Todo</button>
            </form>
        </div>
    )
}

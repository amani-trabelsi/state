import React, { Component } from 'react'

class List extends Component{
    state ={
        isvisible : false
    }
    togglevisibility= () => { 
        this.setState({
            isvisible : !this.state.isvisible
        })


    }

    todos =[
        'Name : Amani',
        'Bio : React',
        'Profession : Student',
        <img src='https://businessdynamite.xyz/wp-content/uploads/timon-klauser-3MAmj1ZKSZA-unsplash-1024x629.jpg'></img>
        


    ]
    render() {

        return(
            <div id='profile'>
              <button className='visibility-btn' onClick={this.togglevisibility}> Show Profile   </button>
              { this.state.isvisible ?
               (<ul className="list">
               {this.todos.map((todo,i) => (
                   <li key={i} > {todo} </li> ))}
               </ul>): (<h4> click the button to see profile</h4>)

               }
           
            </div>
        )
    }

}
export default List 
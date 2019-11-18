import React, { Component } from 'react';

class NoteTaking extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            items:[]
        }
    }




        addNote(event) {
            console.log(working);
            if( this.title.value != "") { 
            var newItem = {
                note: this.theNote.value,
                title: this.theTitle.value
            }
        }
        event.preventDefault();
        this.theNote.value = "";
        this.theTitle.value = "";
        };



    render() { 
        return ( 
            <div>
            <header>
                <h1>Note Taking Application</h1>
                </header>
                <div className="main-container">
                    <ul> 
                this.state.items.map( (val) => <li>{val.title} - {val.note} </li>)
                </ul>
                </div>
    
                <footer>
                    <form>
                        <input type="text" placeholder="Enter note" ref={(title) => this.thisTitle = title }/>
                        <textarea 
                        placeholder="Enter your note here" ref={(note) => this.theNote = note}/>
                        <button type="Submit"> Add Notes </button>
                        </form>
                        </footer>
    
        </div>
         );
    }
}
 
export default NoteTaking;


// import React, { Component } from 'react';

// export class noteTaking extends Component {


//     const
// ructor(props) {
//         super(props);

//         this.state = {
//             items: [],
//             // theNote : ""
//         }

//         // this.addNote = this.addNote.bind(this);

//     }

//     addNote =(event)=>{
//         if(this.title.value != ""){
//             var newItem = {
//                         note: this.theNote.value,
//                         title: this.theTitle.value
//                     }
//         }
//     }
//         // addNote(event) {
//         //     console.log(working);
//         //     if( this.title.value != "") { 
//         //     var newItem = {
//         //         note: this.theNote.value,
//         //         title: this.theTitle.value
//         //     }
//         // }
//         // };
//         // // this.setState ({ items: prevState.items.concat(newItem)})
//         // this.setState( prevState => ({ 

//         // // this.setState((prevState) => {
        
//         // //     // return {
//         // //         items: prevState.items.concat(newItem)
//         // //     }
//         // });

//         this.theNote.value = "";
//         this.theTitle.value = "";

//         // console.log("this.state.items");

//         event.preventDefault();


//         render() {
//             return (
//               <div>
//                 {console.log('test')}
//               </div>
//             );
//           }
// }
// // export default noteTaking;
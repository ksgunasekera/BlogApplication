import React,{Component} from 'react';
import axios from 'axios';

import ShowResult from './showResult';

class Search extends Component{
    constructor(props){
        super(props);
        this.state ={
            term:'',
            category:'',
            result:[]

        }
    }
    onSearch(term) {
        this.setState({term},()=>{
            if(term!=''){
                axios.get(`http://localhost:8000/api/search/${term}`
                ).then((response) =>{


                console.log(response);
                 this.setState({result:response.data})
                })
            }else{
                this.setState({result:[]})
            }
            

        });
        
    }

    render() {
        return(
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" id="search" onChange={(event) => this.onSearch(event.target.value)} />
                    </div>
                </form>
                
                <ShowResult posts={this.state.result}/>
                
            </div>
        )
    }
}

export default Search;
import React from 'react'

//*todo:HOC (High Order Component) : Make component to share
//*todo: state,props,functions shared between two components or more 

/*
..######..##.....##....###....########..########.########.
.##....##.##.....##...##.##...##.....##.##.......##.....##
.##.......##.....##..##...##..##.....##.##.......##.....##
..######..#########.##.....##.########..######...##.....##
.......##.##.....##.#########.##...##...##.......##.....##
.##....##.##.....##.##.....##.##....##..##.......##.....##
..######..##.....##.##.....##.##.....##.########.########.
*/

const UpdatedComponent=(OriginalComponent,num)=>{
    class NewComponent extends React.Component{

        constructor(props) {
            super(props);
            this.state={
                count:0
            }
        }

        increment=()=>{
            this.setState((prevState)=>{
                return {
                    count:prevState.count+1+num
                }
            })
        }

        render(){
            const {count} =this.state
            return (
                    <OriginalComponent
                        incrementCount={this.increment}
                        count={count}/>
                )
        }
    }
    return NewComponent
}

export default UpdatedComponent
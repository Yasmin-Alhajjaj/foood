import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const footer= {
            // position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",             
            backgroundColor: "#4B5320",
            color : "white",
            textAlign : "center",
            opacity:"0.5"
            // display: 'flex', 
            // alignContent: 'flex-end'
         }
        return (
            <div style={footer}>
              <footer>
                  <p>MORE INFO
Phone: 090-090-0320 Email: tk@company.co</p>
                    <p>Posted by:Food Donater</p>
                    <p>Contact information: <a href="mailto:someone@example.com">
                        FoodDonater@FoodDonater.com</a></p>
                </footer>
            </div>
        )
    }
}

/*
   <footer>
                    <p>Posted by: Hege Refsnes</p>
                    <p>Contact information: <a href="mailto:someone@example.com">
                        someone@example.com</a>.</p>
                </footer>
*/

import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const footer= {
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",             
            backgroundColor: "red",
            color : "white",
            textAlign : "center"
         }
        return (
            <div style={footer}>
              <footer>
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

import React, { Component } from 'react'
import "../App.css";

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
            opacity:"0.5",
           //  display: 'flex', 
            // alignContent: 'flex-end',
           // fixed:"bottom"
         }
        return (
//             <div style={footer}>
//               <footer>
//                   <p>MORE INFO
// Phone: 090-090-0320 Email: tk@company.co</p>
//                     <p>Posted by:Food Donater</p>
//                     <p>Contact information: <a href="mailto:someone@example.com">
//                         FoodDonater@FoodDonater.com</a></p>
//                 </footer>
//             </div>


//              

<div className="footer">
<div className="container">
        <a href='#'><i class="fa fa-facebook fa-3x fa-fw"></i></a>
        <a href='#'><i class="fa fa-twitter fa-3x fa-fw"></i></a>
        <a href='#'><i class="fa fa-youtube-play fa-3x fa-fw"></i></a>
        <a href='#'><i class="fa fa-linkedin fa-3x fa-fw"></i></a>
</div>          

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

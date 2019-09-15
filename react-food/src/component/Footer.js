import React, { Component } from 'react'
import "../App.css";

export default class Footer extends Component {
    render() {
        const footer= {
            left: "0",
            bottom: "0",
            width: "100%",             
            backgroundColor: "black",
            color : "white",
            textAlign : "center",
        
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

<div className="footer" style={footer}>
<div className="container">
<a href='#'><i className="fa fa-twitch fa-3x fa-fw"></i></a>
              <a href='#'><i className="fa fa-facebook fa-3x fa-fw"></i></a>
              <a href='#'><i className="fa fa-twitter fa-3x fa-fw"></i></a>
              <a href='#'><i className="fa fa-youtube-play fa-3x fa-fw"></i></a>
              <a href='#'><i className="fa fa-rss fa-3x fa-fw"></i></a>
              <a href='#'><i className="fa fa-linkedin fa-3x fa-fw"></i></a>
        <p>Contact information: <a href="mailto:someone@example.com">
        editorial@ourfood.com</a>.</p>
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

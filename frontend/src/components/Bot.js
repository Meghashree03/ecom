// import React, { Component } from 'react'

// export class Bot extends Component {
//     componentDidMount() {
      

//     (function(d, m){
//         var kommunicateSettings = 
//             {"appId":"27d75e9a58bb9e112acb3fdffdcdfcdf7","popupWidget":true,"automaticChatOpenOnNavigation":true};
//         var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//         var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//         window.kommunicate = m; m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});
   

//     }


//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

// export default Bot

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Check if the Kommunicate script has already been loaded
    if (typeof window.kommunicate === 'undefined') {
      (function (d, m) {
        var kommunicateSettings = {
          "appId": "27d75e9a58bb9e112acb3fdffdcdfcdf7"
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        (window.kommunicate = m).queue = [];
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || []);
    }
  }, []); 

  return (
    <div>
    
    </div>
  );
}

export default App;

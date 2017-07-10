const React = require('react');
const {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function() {
//         return (
//             <head className="top-bar">
//                 <ul className="menu">
//                     <li><IndexLink activeClass="active" to="/">React Timer App</IndexLink></li>
//                     <li><Link activeClass="active" to="/timer">Timer</Link></li>
//                     <li><Link activeClass="active" to="/coutdown">Coutdown</Link></li>
//                 </ul>
//             </head>
//         );
//     }
// });

var Nav = () => {
    return (
              <header className="top-bar">
        
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">React Timer App</li>
                <li><IndexLink activeClassName="active-link" to="/">Timer</IndexLink></li>
                <li><Link activeClassName="active-link" to="/coutdown">Coutdown</Link></li>
            </ul>
        </div>
        <div className="top-bar-right">
            
        </div>
             </header>
    );
                
};

module.exports = Nav;

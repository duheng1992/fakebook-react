import React from 'react';

class Loading extends React.Component {

    render () {
        return (
            <div className="loading">
            <div className="balls">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>        
        )
    }
}

export { Loading }
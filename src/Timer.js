import React, {Component} from "react"

class Timer extends Component {
    
    deadline = new Date('03/31/2021')
    current = new Date()
    daysRemaining = Math.ceil((this.deadline.getTime() - this.current.getTime()) / (1000 * 3600 * 24))

    render(){
        
        return(
            <div className="container timer">
                <div className="columns is-variable is-1-mobile is-2-tablet is-3-desktop is-8-widescreen is-2-fullhd">
                    <div className="column">
                    <div id="days" className="box">{ this.daysRemaining }</div>
                    </div>
                    <div className="column">
                    <div className="semicolon">:</div>
                    </div>
                    <div id="hours" className="column">
                    <div className="box">00</div>
                    </div>
                    <div className="column">
                    <div className="semicolon">:</div>
                    </div>
                    <div id="minutes" className="column">
                    <div className="box">00</div>
                    </div>
                    <div className="column">
                    <div className="semicolon">:</div>
                    </div>
                    <div id="seconds" className="column">
                    <div className="box">00</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer
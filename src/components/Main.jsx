import React, { Component } from 'react';
import Capture from './images/Capture.PNG';



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            name: '',
            date: ''
        }

    }
    codeChange = (event) => {
        if (!isNaN(event.target.value)) {
            if (event.target.value.length<=16) {
                this.setState({ code: event.target.value });
            }
        }
    }
    nameChange = (event) => {    
        if (isNaN(event.target.value)) {
            if (event.target.value.length<20) {
                this.setState({ name: event.target.value.toUpperCase() });
            } 
        }
    }
    dateChange = (event) => {
        if (this.state.date.length < 4) {
            if ((event.target.value.slice(0, 2) < 31) && (event.target.value.slice(3, 5) < 12)) {
                this.setState({ date: event.target.value });
            }
            else {
                this.setState({ date: "12/31" })
            }
        }
    }
    render() {
        return (
            <body>
                <main className="main">
                    <div className="card">
                        <div className="card-name">
                            <h1 className="name">CREDIT CARD</h1>
                        </div>
                        <div className="card-detail">
                            <div className="card-detail-desc">
                                <img className="code-img" src={Capture} />
                                <p className="code-card">{this.state.code.padEnd(16, '*').split('').map((x, i) => { return i % 4 === 0 && i > 1 ? " " + x : x }).join('')}</p>
                                <div className="validity-card">
                                    <p className="code-validity">5422</p>
                                    <div className="validity">
                                        <div className="validity-thru">
                                            <div className="text-validity-thru">
                                                <span className="text-validity">VALID</span>
                                                <span className="text-validity">THRU</span>

                                            </div>
                                            <i className="fas fa-caret-right"></i>
                                        </div>
                                        <div className="validity-desc">
                                            <div>
                                                <span className="text-validity">MONTH/</span>
                                                <span className="text-validity">YEAR</span>
                                            </div>
                                            <p className="card-detail-type">{this.state.date.padEnd(4, '-').split('').map((x, i) => { return i === 2 ? "/" + x : x }).join('')}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="holder-text">{this.state.name}</p>
                            </div>
                            <div className="visa-img">
                                <img className="card-img" src="http://buy.posportal.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/101200_1_9E9C5F0F-2AEB-1F79-7428-1CFE949B92BC_1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="inputs">
                        <input value={this.state.code} type="text"  placeholder="CARD NUMBER" onChange={this.codeChange} className="input" />
                        <input value={this.state.name} type="text" placeholder="YOUR NAME"  onChange={this.nameChange} className="input" />
                        <input value={this.state.date} type="text" placeholder="XX/YY" onChange={this.dateChange} className="input" />
                    </div>
                </main>
            </body>
        )
    }
}
export default Main;
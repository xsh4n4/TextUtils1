import React, { useState } from 'react'

export default function About(props) {

    //const [myStyle, setMyStyle] = useState({
    //   color: 'black',
    //    backgroundColor: 'white',
    //    border: '2px solid black' 
    //})
    let myStyle = {
        color:props.mode ==='dark'?'white':'#055160',
        backgroundColor:props.mode ==='dark'?'rgb(5, 81, 96)':'white',
        border: '2px solid',
        borderColor: props.mode ==='dark'?'white':'#055160'
    }
    //const [btntext, setBtnText] = useState("Enable Light Mode")
    /*const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '2px solid white'

            })
            setBtnText("Enable Dark Mode");
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode");
        }
    }*/
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color:props.mode ==='dark'?'white':'#055160'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently . Be it word count or character count, it works efficiently. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={myStyle}>
                            This word counter software in any web browsers such as Chrome,FireFox,Internet Explorer,Safari,Opera.It suits to count characters in Facebook,blog,books,exceldocument,pdf document,essays,etc.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'#4c4f4c':'white'
    }

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

  return (
    <div className="container" >
        <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Vision and Purpose
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    At <strong>TextPerfect</strong> , our mission is to empower users with powerful tools for text analysis and manipulation. We believe that managing text should be intuitive and accessible to everyone, whether you're a student, professional, or just someone looking to refine their writing. Our application allows you to seamlessly analyze, edit, and transform your text, making your work more efficient and effective.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Features Overview
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextPerfect</strong> is designed to simplify your text management tasks. With a user-friendly interface, you can easily analyze your data, modify it, and make quick adjustments. Our features include case conversion (upper, lower, title case), text copying, and removing extra spaces. Whether you're polishing a report or drafting an email, <strong>TextPerfect</strong> provides the tools you need to enhance your text with ease..
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Target Audience
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextPerfect</strong> is perfect for anyone who works with text regularly. From students and educators to professionals in any field, our application caters to all who want to streamline their writing process. By offering essential text manipulation features, we help users save time and focus on what truly matters—crafting their message.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Commitment to Improvement
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the third item's accordion body. We're committed to continuous improvement and innovation. Our team is dedicated to enhancing <strong>TextPerfect</strong> with new features and updates based on user feedback. We believe that the best tools evolve with the needs of their users, and we're excited to grow alongside our community. Join us on this journey to make text analysis easier and more enjoyable!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the third item's accordion body. <strong>TextPerfect</strong> is designed with accessibility in mind, ensuring that users can enjoy a seamless experience across multiple web browsers. We support the latest versions of popular browsers, including Chrome, Firefox, Safari, and Edge. This commitment to compatibility means you can access <strong>TextPerfect</strong> from virtually any device, whether you're at home, in the office, or on the go. We continuously test our application to guarantee optimal performance and functionality, regardless of your browser choice. Enjoy a hassle-free text analysis experience wherever you are!
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

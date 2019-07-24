const About = () => (
    <div>
        <img src = "/static/platzi-logo.png"
             alt = "logo" / >
        <h1>Creado por yo</h1>
        <p>sdsdf</p>
   
        <style jsx>{`
            div{
                text-align:center;
                color:white;
                font-family: Arial, Helvetica, sans-serif;
            }
            h1{
                font-size:32px;
            }
            img{
                margin-top:20px;
                width:30%;
            }

            :global(body){
                background: #333;
            }
            `}
        </style>
    </div>
);



export default About;
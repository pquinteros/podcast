import Link from "next/link";
import Head from "next/head";

const Header = (props) =>(
    <header>
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head> 
        <Link href="/"><a>{props.title}</a></Link>
        
         <style jsx>{`
        header{
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
        }

        a{
            color:#fff;
            text-decoration:none;
        }
    `}
        </style>

    </header>
);



export default Header;
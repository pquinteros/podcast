//import fetch from 'isomorphic-fetch'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from 'next/error';


const Index = (props) => (
 
  <Layout title="Podcasts">
    {props.statusCode !== 200
      ?
      <Error statusCode={props.statusCode} />
      :
      <div className="grid">
        <ChannelGrid channels={props.channels} />
      </div>
    }


  <style jsx>
    {`
    .grid{
      margin-top:25px;
    }
    `}
  </style>
  
  </Layout>
);

Index.getInitialProps = async function (req) {
  try{
  let req = await fetch(`https://api.audioboom.com/channels/recommended`);
  let channels = await req.json();

  return { channels: channels.body, statusCode: 200 }

  }catch(e){
  req.statusCode = 503;
  return { channels: null, statusCode: 503 }
  }
}

export default Index;
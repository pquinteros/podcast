import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import PodcastList from '../components/PodcastList';
import Error from 'next/error';

const Channel= (props) =>(
  <Layout title={props.channel ? props.channel.title : 'Podcasts'}> 

    {props.statusCode !== 200
      ?
      <Error statusCode={props.statusCode} />
      :
      <div>
        <div className="banner" style={{ backgroundImage: `url(${props.channel.urls.banner_image.original})` }} />

        <h1>{props.channel.title}</h1>

        {props.series!=''?<h2>Series</h2>:''}

        <ChannelGrid channels={props.series} />

        <h2 className="titleUltimos">Ùltimos postcasts</h2>

        <PodcastList podcasts={props.audioClips} />
      </div>
    }
    
        <style jsx>{`
        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #eee;
        }
        h1 {
          font-weight: 600;
          padding: 25px 15px 25px 15px;
          margin: 0;
          font-size: 1.8em;
        }
        h2 {
          padding: 15px 15px 30px 15px;
          font-size: 1.4em;
          font-weight: 600;
          margin: 0;
        }
        .titleUltimos{
          margin-top:30px;
        }
      `}</style>
       
    </Layout>
);


Channel.getInitialProps = async function (context) {

try{
    let { id } = context.query;
    let [reqChannel, reqAudio, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${id}`),
        fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${id}/child_channels`)
    ]); 

    let dataChannel = await reqChannel.json();
    let dataAudio = await reqAudio.json();
    let dataSeries = await reqSeries.json();

    if (reqChannel.status >= 400){
    context.statusCode = reqChannel.status;
    return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
    }

    return { channel: dataChannel.body.channel, audioClips: dataAudio.body.audio_clips, series: dataSeries.body.channels, statusCode: 200 }

}catch(e){
    context.statusCode = 503;
    return { channel: null, audioClips: null, series: null, statusCode:503 }
}
}

export default Channel;
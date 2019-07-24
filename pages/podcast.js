import 'isomorphic-unfetch'
import Layout from '../components/Layout'
import PodcastPlayer from '../components/PodcastPlayer'
import Error from 'next/error';


const Podcast = (props) => (
    <Layout title={props.channel ? props.channel.title : 'Podcasts'}>
    {props.statusCode !== 200
            ?
            <Error statusCode={props.statusCode} />
            :
    <PodcastPlayer clip={props.clip} />
    }
    </Layout>
);

Podcast.getInitialProps = async function (context) {
    
    try {
    let { id } = context.query;
    let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
    let clip = (await fetchClip.json())
    
        if (fetchClip.status >= 400) {
            context.statusCode = fetchClip.status;
            return { clip: clip.body.audio_clip, statusCode: fetchClip.status }
        }
        return { clip: clip.body.audio_clip, statusCode: 200}
    } catch (e) {
        context.statusCode = 503;
        return { clip: null, statusCode: 503 }
    }
}




export default Podcast;
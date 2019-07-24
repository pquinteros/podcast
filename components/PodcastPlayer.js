import { Link } from '../routes'
import slug from '../helpers/slug'

const PodcastPlayer = (props) => (
        

       <div className="modal">
            <div className='clip'>
                <nav>
              
                        <Link route='channel'
                        params={{ slug: slug(props.clip.channel.title), id: props.clip.channel.id }}
                            prefetch>
                            <a className='close'> <img src="/static/arrow-back.svg" alt="imagen" /> </a>
                        </Link>
                   
                </nav>

                <picture>
                <div style={{ backgroundImage: `url(${props.clip.urls.image || props.clip.channel.urls.logo_image.original})` }} />
                </picture>

                <div className='player'>
                <h3>{props.clip.title}</h3>
                <h6>{props.clip.channel.title}</h6>
                    <audio controls autoPlay={true}>
                    <source src={props.clip.urls.high_mp3} type='audio/mpeg' />
                    </audio>
                </div>
            </div>

            <style jsx>{`
        nav {
          background: none;
        }
        nav a {
          display: inline-block;
          margin: 25px;
          color: white;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items:center;
          background: rgba(255,255,255,0);
          width: 40px;
          height:40px;
          border-radius: 50%;
        transition: background 0.15s ease-in;
        }
        nav a:hover {
         /*padding-left:22px;*/
         background: rgba(255,255,255,0.10);
        }

        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background: #8756ca;
          color: white;
        }
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 11%;
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .player {
          padding: 30px;
          background: rgba(0,0,0,0.3);
          text-align: center;
        }
        h3 {
          margin: 0;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
        }

        audio:focus {
    outline: 0px;
}

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>
        </div>
   
);

export default PodcastPlayer;
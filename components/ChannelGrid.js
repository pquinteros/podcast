import {Link} from '../routes';
import slug from '../helpers/slug'

const ChannelGrid = (props) => (
    
    <div className="channels">
        {props.channels.map(channel => (
          <Link route='channel' params={{ slug: slug(channel.title), id: channel.id }} key={channel.id} href={`/channel?id=${channel.id}`} prefetch>
                <a className="channel">
                    <img src={channel.urls.logo_image.original} alt="imagen" />
                    <h2>{channel.title}</h2>
                </a>
            </Link>
        ))}

        <style jsx>{`
        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 0px 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
        a.channel {
          display: block;
          color: #333;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          width: 100%;
        }
        h2 {
          padding: 5px 5px 4px 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }

    `}
        </style>

    </div>
);


export default ChannelGrid;
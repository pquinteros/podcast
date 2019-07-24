import Header from './Header';

const Layout = (props) => (
    <div>
    <Header title={props.title}/>
        {props.children}
        
        <style jsx global> {`
        body {
          margin: 0;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, 
             'Segoe UI', Roboto, 'Helvetica Neue', 
             Ubuntu, Arial, sans-serif;
          background: white;
        }

      `} </style>

    </div>
);



export default Layout;
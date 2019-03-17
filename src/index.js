import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetail 
                author="Milan" 
                time="Yesterday 4:34PM" 
                content="Wow, that is great man, god work!" 
                img={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                time="Today 5:46PM" 
                content="I dont really like this, it seems  like author is childish af" 
                img={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                time="4 minutes ago" 
                content="@Alex, He is 15."
                img={faker.image.avatar()}
             />
            
         </div>
    );
}

ReactDOM.render(
<App />,
document.getElementById('root')
);

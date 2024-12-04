import 'bootstrap/dist/css/bootstrap.min.css';

const Critiques = () => {
    return (
        <div className="container my-5">
            <section className="mb-5">
                <header className="text-center mb-4">
                    <h2 className="text-dark">Self-Evaluation</h2>
                </header>
                <article className="p-3 rounded bg-secondary text-white">
                    <h3 className="text-warning">What did we do well?</h3>
                    <p>
                        Blank
                    </p>
                    <h3 className="text-warning">What did we learn?</h3>
                    <p>
                        Blank
                    </p>
                    <h3 className="text-warning">What did we teach each other?</h3>
                    <p>
                        Blank
                    </p>
                    <h3 className="text-warning">What can we do better?</h3>
                    <p>
                        Blank
                    </p>
                    <h3 className="text-warning">What effect did the peer reviews have?</h3>
                    <p>
                        Blank
                    </p>
                    <h3 className="text-warning">What puzzles us?</h3>
                    <p>
                        Blank
                    </p>
                </article>
            </section>

            <section>
                <header className="text-center mb-4">
                    <h2 className="text-dark">Feedback for Developers</h2>
                </header>
                <article className="p-3 rounded bg-light text-dark shadow-sm">
                    <h3 className="text-primary">What They Did Well</h3>
                    <p>
                        We felt like they did a very good job of providing an ample amount of information to help out homeless people. The website is very functionality
                        and the information is very easy to find. Additionally we found that UI was very modern and minimalistic, which we found to be appealing.
                    </p>
                    <h3 className="text-primary">How effective was their restful API?</h3>
                    <p>
                        Their RESTful API was quite easy to use, and we found that their documentation did a more than adequate job of showing
                        how to use it. The information received from the API was also in a clean format and we found the information to be very thorough
                        and not lacking in any way.
                    </p>
                    <h3 className="text-primary">How well did they implement your user stories?</h3>
                    <p>
                        All user stories were implemented to our exact specifications. If there was ever anything wrong with our user stories, they always
                        mentioned the issue before proceeding. Overall, we were very happy with the implementation of our user stories.
                    </p>
                    <h3 className="text-primary">What did we learn from their website?</h3>
                    <p>
                        We learned that there are a lot of organizations just in Texas that are willing to help out homeless people. \
                        We also learned that there are a lot of different ways to help out homeless people, and that there are a lot of different
                        services that are available to them.
                    </p>
                    <h3 className="text-primary">What can they do better?</h3>
                    <p>
                        One thing I feel that they could do better is to use less of the base bootstrap components and instead customize them
                        some more so that the website looks a bit more polished. Having a more unique look would make the website stand out more.
                    </p>
                    <h3 className="text-primary">What puzzles us about their website?</h3>
                    <p>
                        One thing that puzzled me about their website is that for the data, they said they manually grabbed it from postman. This surprised us
                        because I am sure that this would have taken a long time to manually input into their database intead of writing a script to do it for them.
                        Other than there is nothing too confusing about their website. 
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Critiques;

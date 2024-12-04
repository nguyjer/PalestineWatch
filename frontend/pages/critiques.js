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
                        We think we did a great job of creating a website that not only looks very clean and is easy to use, but also provides a lot of information.
                        We also did a great job with learning/using all of the required technologies, and we feel like we did a great job of implementing all of the user stories.
                    </p>
                    <h3 className="text-warning">What did we learn?</h3>
                    <p>
                        We feel like we all learned so much about how to develop a full stack application. We learned how to use a lot of different technologies
                        and connect them to create a really well functioning website. There were definitely a lot of technologies that we hade never used before
                        like AWS or Jest, but we learned how to use them and implement them for our website.
                    </p>
                    <h3 className="text-warning">What did we teach each other?</h3>
                    <p>
                        We think we all taught eachother how to better work as a team and communicate with eachother. We all had busy schedules but 
                        we somehow managed to find time to work together with one another every week and helped eachother out when we needed it.
                    </p>
                    <h3 className="text-warning">What can we do better?</h3>
                    <p>
                        I think one thing we could do better would have been to focus more on css and the style of the website early on. We spent a lot of time
                        getting the information on the website which was definitely the #1 priority, but we at times neglected improving the design elements of the website.
                    </p>
                    <h3 className="text-warning">What effect did the peer reviews have?</h3>
                    <p>
                        We thought that the peer reviews were very helpful to hold us accoutable. We were able to see what other teammates thought of us
                        and what we could do better.
                    </p>
                    <h3 className="text-warning">What puzzles us?</h3>
                    <p>
                        One thing that puzzled us was how hard it was to find APIs that could give us data. Although the APIs we found were very helpful, it was
                        very hard to find them despite the massive media coverage surrounding Palestine.
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
                        We learned that there are a lot of organizations just in Texas that are willing to help out homeless people. 
                        We also learned that there are a lot of different ways to help out homeless people, and that there are a lot of different
                        services that are available to them.
                    </p>
                    <h3 className="text-primary">What can they do better?</h3>
                    <p>
                        One thing we feel that they could do better is to use less of the base bootstrap components and instead customize them
                        some more so that the website looks a bit more polished. Having a more unique look would make the website stand out more.
                    </p>
                    <h3 className="text-primary">What puzzles us about their website?</h3>
                    <p>
                        One thing that puzzled me about their website is that for the data, they said they manually grabbed it from postman. This surprised us
                        because we are sure that this would have taken a long time to manually input into their database intead of writing a script to do it for them.
                        Other than there is nothing too confusing about their website. 
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Critiques;

export default function AboutMe() {
    const detail = [{
        description:(
            <>
            <text>
                Since I was a little kid, I've been excited about technology and really curious about it. This curiosity led me to actually fix my family's computer at home. I tried to create a partition to install two different operating systems, Windows and Ubuntu.

                Maybe, like in any other history, once you get to know the technology, you can't imagine life without it. You might even turn into a robot. But that's not what happened to me. I got to learn a little HTML and CSS, which was great. And I've been interested in technology since I was a kid.
            </text>
            </>
        )
    }]
    return(
        <div>
            {detail.map((item, index) => (
                <div key={index}>
                    <p className="text-xl text-center text-neutral-400 font-light ml-10 mt-30 2xl:text-xl 2xl:mt-5 2xl:mr-80 2xl:ml-10"> 
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
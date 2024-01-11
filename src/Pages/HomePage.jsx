// HomePage.js

import { useSpring, animated, config } from "react-spring";
import ThemeWrapper from "../Components/Wrapper/ThemeWrapper";

const HomePage = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: config.wobbly,
  });

  const wavingHand = useSpring({
    loop: { reverse: true },
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(30deg)" },
    config: {
      duration: 500,
    },
  });

  return (
    <ThemeWrapper>
      <div className="flex flex-row md:px-40 p-8 pt-32 pb-10">
        <div className="container mx-auto text-white flex flex-col">
          <animated.h1 className="text-6xl font-bold mb-4" style={fadeIn}>
            {"Hello, I'm Bhagyaj!"}{" "}
            <animated.p
              style={{ ...wavingHand, display: "inline-block" }}
              role="img"
            >
              👋
            </animated.p>
          </animated.h1>
          <animated.p className="text-2xl" style={fadeIn}>
            {
              " Welcome to my cozy corner on the Internet. Lets see some stuffs I cooked up!"
            }
            <br />
            {"Grab a cup of coffee and let's go though some of my creations!"}
          </animated.p>
        </div>
        <div className="flex-co w-[50%] lg:flex hidden">
          <img
            src="https://shkspr.mobi/blog/wp-content/uploads/2015/02/loop2.gif"
            alt="loop"
            className="mx-auto prevent-drag"
          />
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default HomePage;

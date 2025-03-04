import { useEffect } from "react";

export default function Index() {
  const vite_email = import.meta.env.VITE_EMAIL;

  useEffect(() => {
    const breathingText = document.getElementsByClassName("breathing-text")[0];
    if (!breathingText) return;
    const stages = ["breathe in", "hold", "breathe out"];
    const timings = [3800, 1600, 2600];
    let timeoutId: NodeJS.Timeout | null = null;
    let index = 0;

    const updateText = () => {
      breathingText.textContent = stages[index];
      index = (index + 1) % stages.length;
    };

    const runStages = () => {
      updateText();
      setTimeout(() => {
        index = 1;
        updateText();
        setTimeout(() => {
          index = 2;
          updateText();
          setTimeout(runStages, timings[2]);
        }, timings[1]);
      }, timings[0]);
    };

    runStages();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const mindfulEntriesMobile = [
    "Are you currently using a digital device out of habit to kill time?",
    "Don't think about which gadget you can get next. Take a moment to consider what you can let go of.",
    "Touch the grass with your feet from time to time.",
  ];

  const mindfulEntriesDesktop = [
    "Are you currently using a digital<br>device out of habit to kill time?",
    "Don't think about which gadget you can get next.<br>Take a moment to consider what you can let go of.",
    "Touch the grass with your feet from time to time.",
  ];


  return (
    <>
      <div className="lg:hidden container min-h-screen flex flex-wrap justify-between items-center pb-12">
        <div className="w-full px-4 sm:px-8">
          <div className="content-box mx-auto mt-28 me-page px-4">
            {/* <h1 className="underline">Relax, Breathe & Code.</h1> */}
            <h2 className="underline mt-6 text-center">Relax, Breathe & Move.</h2>
            <div className="pt-8 pb-4 px-0 grid grid-cols-2 gap-4 text-center">
              <div><p className="text-black">🗂️ Templates</p></div>
              <div><p className="text-black">🔧 WordPress</p></div>
              <div><p className="text-black">🎨 Frontend</p></div>
              <div><p className="text-black">🛒 Shopware</p></div>
            </div>
            {/* <div className="pt-4 px-0">
              <ul>
                <li>🏠 Based in Germany (as of now...)</li>
                <li>🧘🏼 The faster the world moves, the slower I go</li>
              </ul>
            </div> */}
            <p className="mb-4">
              <a
                href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Contact Me"
                className="btn border-2 py-4 px-6 rounded-full mt-8 text-soft-cream duration-300 mx-auto"
              >
                Contact me
              </a>
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-48">
          <div className="inner-breathing-circle-mobile absolute"></div>
          <div className="inner-breathing-circle-mobile absolute"></div>
          <div className="breathing-circle-mobile absolute"></div>
          <span id="breathing-text-mobile" className="breathing-text absolute pt-28">breathe in</span>
        </div>

        <div className="pt-48 w-2/3 mx-auto">
          <img src="/home/lotus.png" alt="" className="mx-auto" />
        </div>
      </div>

      <div className="hidden lg:flex container min-h-screen flex-wrap justify-between items-center pb-48">
        <div className="w-1/2 px-4">
          <div className="content-box p-12 mt-0">
            {/* <h1 className="underline">Relax, Breathe & Code.</h1> */}
            <h2 className="underline text-center">Relax, Breathe & Move.</h2>
            <div className="pt-8 pb-4 px-0 grid grid-cols-2 gap-4 text-center">
              <div><p className="text-black">🗂️ Templates</p></div>
              <div><p className="text-black">🔧 WordPress</p></div>
              <div><p className="text-black">🎨 Frontend</p></div>
              <div><p className="text-black">🛒 Shopware</p></div>
            </div>
            {/* <div className="pt-4 px-0">
              <ul>
                <li>🏠 Based in Germany (as of now...)</li>
                <li>🧘🏼 The faster the world moves, the slower I go</li>
              </ul>
            </div> */}
            <p className="mb-4">
              <a
                href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Contact Me"
                className="btn border-2 py-4 px-6 rounded-full mt-8 text-soft-cream duration-300 mx-auto"
              >Contact me</a>
            </p>
          </div></div>

        <div className="w-1/2 flex items-center justify-center mt-0">
          <div className="inner-breathing-circle absolute"></div>
          <div className="inner-breathing-circle absolute"></div>
          <div className="breathing-circle absolute"></div>
          <span id="breathing-text" className="breathing-text absolute pt-21">breathe in</span>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
          <img src="/home/lotus.png" alt="" />
        </div>
      </div>

      <div className="bg-white py-24">

        <div className="lg:hidden container text-center">
          <h2>Mindful & Intentional</h2>
          {mindfulEntriesMobile.map((entry, index) => (
            <p
              className="pt-8 px-4 md:px-0 mx-auto"
              dangerouslySetInnerHTML={{
                __html: entry
              }}
            ></p>
          ))}
        </div>

        <div className="hidden lg:block container text-center">
          <h2>Mindful & Intentional</h2>
          {mindfulEntriesDesktop.map((entry, index) => (
            <p
              className="pt-8 px-4 md:px-0 mx-auto"
              dangerouslySetInnerHTML={{
                __html: entry
              }}
            ></p>
          ))}
        </div>

      </div>

      {/* <div className="container flex flex-wrap pt-24 gap-4">
        <div className="lg:w-1/2 text-center mx-auto pb-8">
          <h2 className="text-black">Quality takes time</h2>
          <p className="pt-4 mx-auto text-earthy-brown">
            Especially in our hasty ti- You get the rest.<br></br>I spare you the... time.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="/home/home_2.PNG" alt="Lunex Dancer Portrait" />
        </div>
      </div> */}
    </>
  );
}

export default function TailwindFilters() {
  // reactjs.jpg is used here so the lab runs out of the box.
  const src = "/images/reactjs.svg";
  return (
    <div>
      <h2>Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>

      <img className="brightness-200 w-1/4" src={src} alt="pale" />

      <h3 className="text-2xl">Grayscale and brightness</h3>
      <img
        id="wd-ai-filters"
        className="lg:grayscale grayscale-0 brightness-50 lg:brightness-150 w-1/4"
        src={src}
        alt="size up and down to change gray quality and brightness"
      />
    </div>
  );
}
